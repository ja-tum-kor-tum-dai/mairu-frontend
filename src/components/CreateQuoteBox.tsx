import { tw } from 'twind'
import { useState } from 'react'
import {
  container,
  textTitle,
  textInput,
  textSubmit,
  formInput,
  formSubmitButton,
} from '../styles/components'

const CreateQuoteBox = () => {
  const [question, setQuestion] = useState('')
  const [who, setWho] = useState('')
  const [source, setSource] = useState('')

  return (
    <div className={tw`${container}`}>
      <h1 className={tw`${textTitle}`}>ท่านเคยพูดอะไรไว้บ้าง จำได้ไหม</h1>

      <textarea
        className={tw`sm:h-20 lg:h-1/5 min-h-1/5 ${formInput} ${textInput} mt-5`}
        placeholder="จำไม่ได้ๆๆๆๆ"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <input
        type="text"
        className={tw`${formInput} ${textInput}`}
        placeholder="ใคร"
        value={who}
        onChange={(e) => setWho(e.target.value)}
      />
      <input
        type="text"
        className={tw`${formInput} ${textInput}`}
        placeholder="แหล่งอ้างอิง (แปะลิงก์เว็บไซต์ / วิดีโอ / โพสต์ต้นทาง)"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <div className={tw`my-5`}>
        <button
          className={tw`bg-gradient-to-r from-yellow-200 to-blue-200 ${textSubmit} ${formSubmitButton}`}
        >
          ได้กล่าวเอาไว้
        </button>
      </div>
    </div>
  )
}

export default CreateQuoteBox
