import { tw } from 'twind'
import { Dispatch, SetStateAction } from 'react'
import {
  container,
  formSubmitButton,
  textSubmit,
  textTitle,
  textBase,
} from '../styles/components'

interface AnswerBoxProp {
  quote?: string
  resetAnswer?: Dispatch<SetStateAction<string>>
}

const AnswerBox = ({ quote, resetAnswer }: AnswerBoxProp) => {
  return (
    // to-do
    // skeleton with https://tailwindcss.com/docs/animation#pulse
    // when fetching
    <div className={tw`${container} sm:mx-10 md:mx-20`}>
      <h1 className={tw`${textTitle} my-3 leading-loose`}>
        {quote || 'ไม่รู้' + 'ๆ'.repeat(Math.random() * 10)}
      </h1>
      <span className={tw`${textBase}`}>
        ...ใครสักคนได้กล่าวเอาไว้
      </span>
      <div className={tw`my-5`}>
        <button
          className={tw`bg-gradient-to-r from-green-200 to-pink-200 ${textSubmit} ${formSubmitButton}`}
          onClick={() => {
            if (resetAnswer) {
              resetAnswer('')
            }
          }}
        >
          ถามใหม่
        </button>
      </div>
    </div>
  )
}

export default AnswerBox
