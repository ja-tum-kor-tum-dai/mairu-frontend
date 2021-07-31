import Head from 'next/head'
import QuestionBox from '../components/QuestionBox'
import AnswerBox from '../components/AnswerBox'
import Navbar from '../components/Navbar'
import { tw } from 'twind'
import { useState } from 'react'

const HomePage = () => {
  const [answer, setAnswer] = useState('')

  return (
    <div>
      <Head>
        <title>ถามคำถามท่าน – ไม่รู้</title>
      </Head>
      <main className={tw`min-h-screen`}>
        {answer ? <AnswerBox /> : <QuestionBox />}
        <Navbar />
      </main>
    </div>
  )
}

export default HomePage
