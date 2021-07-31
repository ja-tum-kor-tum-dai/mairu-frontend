import Head from 'next/head'
import CenterLayout from '../layouts/CenterLayout'
import AnswerBox from '../components/AnswerBox'

const RandomPage = () => {
  return (
    <CenterLayout>
      <Head>
        <title>สุ่มวลีเด็ด ๆ – ไม่รู้</title>
      </Head>
      <AnswerBox />
    </CenterLayout>
  )
}

export default RandomPage
