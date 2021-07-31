import { useState } from 'react'
import { tw } from 'twind'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import prodiumPic from '../../public/images/tribune.png'

const HomePage = () => {
  const [answer, setAnswer] = useState('')

  return (
    <div>
      <Head>
        <title>ถามคำถามท่าน – ไม่รู้</title>
      </Head>
      <main>
        <div className={tw`flex flex-col justify-center items-center mt-20`}>
          <div className={tw`mb-7`}>
            <Image
              src={prodiumPic}
              alt="prodium"
              width={100}
              height={100}
              objectFit="contain"
            />
          </div>

          <h1 className={tw`text-5xl text-center`}>
            ท่านขึ้นโพเดียมแล้ว เชิญนักข่าวถาม
          </h1>

          <input
            className={tw`py-3 px-2 border mt-5 w-3/5 text-lg font-serif`}
            type="text"
            placeholder="เมื่อไหร่จะได้วัคซีน ?"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <div className={tw`my-5`}>
            <button
              onClick={() => console.log(answer)}
              className={tw`bg-gradient-to-r from-blue-200 to-pink-200 text-2xl py-4 px-6 rounded mx-3 shadow border-1 border-gray-600 hover:shadow-xl hover:text-gray-600`}
            >
              เอาตรง ๆ ค่ะท่าน
            </button>
            <button
              className={tw`bg-gradient-to-r from-green-200 to-yellow-200 text-2xl py-4 px-6 rounded mx-3 shadow border-1 border-gray-600 hover:shadow-xl hover:text-gray-600`}
            >
              ค่ะท่าน
            </button>
          </div>
          <Navbar />
        </div>
      </main>
    </div>
  )
}

export default HomePage
