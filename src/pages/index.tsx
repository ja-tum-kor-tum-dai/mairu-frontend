import QuestionBox from '../components/QuestionBox'
import AnswerBox from '../components/AnswerBox'
import { useState } from 'react'
import CenterLayout from '../layouts/CenterLayout'

const HomePage = () => {
  const [answer, setAnswer] = useState('')

  return (
    <CenterLayout>
      {answer ? (
        <AnswerBox quote={answer} resetAnswer={setAnswer} />
      ) : (
        <QuestionBox setAnswer={setAnswer} />
      )}
    </CenterLayout>
  )
}

export default HomePage
