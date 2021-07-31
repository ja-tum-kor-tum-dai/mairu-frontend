import Image from 'next/image'
import prodiumPic from '../../public/images/tribune.png'
import { tw } from 'twind'
import { useState, Dispatch, SetStateAction } from 'react'
import {
  container,
  textTitle,
  textInput,
  textSubmit,
  formInput,
  formSubmitButton,
} from '../styles/components'

interface QuestionBoxProp {
  setAnswer: Dispatch<SetStateAction<string>>
}

const QuestionBox = ({ setAnswer }: QuestionBoxProp) => {
  const [question, setQuestion] = useState('')

  return (
    <div className={tw`${container}`}>
      <div className={tw`mb-7`}>
        <Image
          src={prodiumPic}
          alt="prodium"
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>

      <h1 className={tw`${textTitle}`}>ท่านขึ้นโพเดียมแล้ว เชิญนักข่าวถาม</h1>

      <input
        className={tw`w-full ${formInput} mt-5 ${textInput}`}
        type="text"
        placeholder="เมื่อไหร่จะได้วัคซีน ?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <div className={tw`my-5 flex`}>
        <button
          className={tw`bg-gradient-to-r from-blue-200 to-pink-200 ${textSubmit} ${formSubmitButton}`}
        >
          เอาตรง ๆ ค่ะท่าน
        </button>
        <button
          className={tw`bg-gradient-to-r from-green-200 to-yellow-200 ${textSubmit} ${formSubmitButton}`}
        >
          ค่ะท่าน
        </button>
      </div>
    </div>
  )
}

export default QuestionBox
