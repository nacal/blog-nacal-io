import { FC } from 'react'

type Props = {
  title: string
  description: string
  url: string
}
const HeadContents: FC<Props> = ({ title, description, url }) => {
  return (
    <>
      <title>{title} - nacal.io</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={`${process.env.BASE_URL}/api/og?title=${title}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}

export default HeadContents
