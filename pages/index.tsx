import IndexPage from '../components/pages/indexPage'
import HeadContents from 'components/atoms/HeadContents'
import DefaultLayout from 'components/layout/Default'

export default function Home() {
  return (
    <>
      <HeadContents title="nacal.io" description="I am nacal." url={process.env.BASE_URL!} />
      <DefaultLayout>
        <IndexPage />
      </DefaultLayout>
    </>
  )
}
