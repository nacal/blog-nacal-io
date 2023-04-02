import { get } from '@vercel/edge-config'
import { NextResponse, type NextRequest } from 'next/server'

export const config = {
  matcher: '/blog/:path*',
}

export async function middleware(req: NextRequest) {
  const regex = /\/([^\/]+)$/
  const match = regex.exec(req.nextUrl.pathname)
  const id = match && match[1]
  const result = id && (await get(id))
  const res = NextResponse.next({
    request: {
      headers: req.headers,
    },
  })
  res.headers.set('favorite-count', result)
  return res
}
