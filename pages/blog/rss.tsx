import { ServerResponse } from 'http'
import Router from 'next/router'

const RedirectPage = () => {}

type InitialProps = {
  res: ServerResponse
}

RedirectPage.getInitialProps = async ({ res }: InitialProps) => {
  if (typeof window === 'undefined') {
    res.writeHead(302, { Location: '/blog/rss.xml' })
    res.end()

    return {}
  }

  Router.push('/blog/rss.xml')

  return {}
}

export default RedirectPage
