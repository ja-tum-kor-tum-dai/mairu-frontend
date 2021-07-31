import Head from 'next/head'
import CenterLayout from '../layouts/CenterLayout'
import CreateQuoteBox from '../components/CreateQuoteBox'

const CreatePage = () => {
  return (
    <CenterLayout>
      <Head>
        <title>สร้างวลีเด็ด ๆ – ไม่รู้</title>
      </Head>
      <CreateQuoteBox />
    </CenterLayout>
  )
}

export default CreatePage
