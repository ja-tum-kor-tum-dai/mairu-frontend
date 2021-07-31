import { tw } from 'twind'
import { Dispatch, SetStateAction } from 'react'

interface AnswerBoxProp {
  quote?: string
  resetAnswer: Dispatch<SetStateAction<string>>
}

const AnswerBox = ({ quote, resetAnswer }: AnswerBoxProp) => {
  return (
    <div
      className={tw`flex flex-col justify-center items-center sm:mx-10 md:mx-20`}
    >
      <h1
        className={tw`sm:text-2lg md:text-3xl lg:text-4xl my-3 text-center leading-loose`}
      >
        {quote ||
          'ตอนนี้หลายๆคนคงได้ทราบกันแล้ว ว่าเทนนิสมีอะไรบางอย่างที่ฝ่ายเรารับไม่ได้ (และไม่มีวันยอมรับได้)'}
      </h1>
      <div className={tw`my-5`}>
        <button
          className={tw`bg-gradient-to-r from-green-200 to-pink-200 text-2xl py-4 px-6 rounded mx-3 shadow border-1 border-gray-600 hover:shadow-xl hover:text-gray-600`}
          onClick={() => resetAnswer('')}
        >
          ค่ะท่าน
        </button>
      </div>
    </div>
  )
}

export default AnswerBox
