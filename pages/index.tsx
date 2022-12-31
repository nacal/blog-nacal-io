import Head from 'next/head'
import IndexPage from '../components/pages/indexPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>nacal.io</title>
        <meta name="description" content="nacal.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IndexPage />
      </main>
    </>
  )
}
