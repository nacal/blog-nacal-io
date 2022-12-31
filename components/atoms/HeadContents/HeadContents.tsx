import { FC } from 'react'

type Props = {
  title: string
}
const HeadContents: FC<Props> = ({ title }) => {
  return (
    <>
      <title>{title} - nacal.io</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`https://nacal.io/api/og?${title}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}

export default HeadContents
