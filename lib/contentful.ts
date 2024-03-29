import { createClient } from 'contentful'
import { Entry } from 'contentful'

export interface IPostFields {
  title: string
  body: string
  publishedAt: string
  category: Entry<ICategoryFields>
}

export interface ICategoryFields {
  title: string
  slug: string
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'post'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export const buildClient = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  })
  return client
}
