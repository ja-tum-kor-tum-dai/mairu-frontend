import Image from 'next/image'
import questionPic from '../../public/images/mairuu.png'
import { tw } from 'twind'
import { useState, Dispatch, SetStateAction } from 'react'
import {
  container,
  textTitle,
  textInput,
  textSubmit,
  formInput,
  formSubmitButton,
  transitionZoom,
} from '../styles/components'
import { askQuestion } from '../utils/fetchData'

interface QuestionBoxProp {
  setAnswer: Dispatch<SetStateAction<string>>
}

const QuestionBox = ({ setAnswer }: QuestionBoxProp) => {
  const [question, setQuestion] = useState('')

  return (
    <div className={tw`${container} w-4/5`}>
      <div className={tw`mb-7`}>
        <Image
          src={questionPic}
          alt="question"
          width={100}
          height={100}
          objectFit="contain"
          className={tw`${transitionZoom} shadow-xl`}
        />
      </div>

      <h1 className={tw`${textTitle}`}>อยากถามอะไรดี</h1>

      <input
        className={tw`w-full ${formInput} mt-5 ${textInput}`}
        type="text"
        placeholder="เมื่อไหร่ ?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <div className={tw`my-5 flex`}>
        {/* <button
          className={tw`bg-gradient-to-r from-blue-200 to-pink-200 ${textSubmit} ${formSubmitButton}`}
        >
          ถามแบบจริงจัง
        </button> */}
        <button
          className={tw`bg-gradient-to-r from-green-200 to-yellow-200 ${textSubmit} ${formSubmitButton}`}
          onClick={async () => {
            if (question) {
              const data = await askQuestion()
              setAnswer(data.quote)
            }
          }}
        >
          ถามเลย
        </button>
      </div>
    </div>
  )
}

export default QuestionBox
