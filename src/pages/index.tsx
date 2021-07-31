import Head from 'next/head'
import QuestionBox from '../components/QuestionBox'
import AnswerBox from '../components/AnswerBox'
import { useState } from 'react'
import CenterLayout from '../layouts/CenterLayout'

const HomePage = () => {
  const [answer, setAnswer] = useState('')

  return (
    <CenterLayout>
      <Head>
        <title>ถามคำถามท่าน – ไม่รู้</title>
      </Head>
      {answer ? <AnswerBox /> : <QuestionBox />}
    </CenterLayout>
  )
}

export default HomePage
