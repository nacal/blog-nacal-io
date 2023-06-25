import * as fs from 'fs'
import { Entry } from 'contentful'
import RSS from 'rss'
import { IPostFields } from 'lib/contentful'

export const generateEntryRssXml = (entries: Entry<IPostFields>[], path: string) => {
  const rss = new RSS({
    title: 'nacal.io',
    description: 'Under Development',
    site_url: process.env.BASE_URL ?? 'https://nacal.io',
    feed_url: `${process.env.BASE_URL}${path}/rss.xml`,
  })

  entries.forEach((entry) => {
    rss.item({
      title: entry.fields.title,
      description: entry.fields.body,
      custom_elements: [
        {
          'content:encoded': {
            _cdata: entry.fields.body,
          },
        },
      ],
      date: new Date(entry.fields.publishedAt),
      url: `${process.env.BASE_URL}${path}/${entry.sys.id}`,
    })
  })

  return rss.xml()
}

export const publishRssXml = async (entries: Entry<IPostFields>[], path: string) => {
  const rssPath = `./public/${path}/rss.xml`
  const rss = generateEntryRssXml(entries, path)
  fs.writeFileSync(rssPath, rss)
}
