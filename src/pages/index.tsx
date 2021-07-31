import Head from 'next/head'
import Image from 'next/image'
import { tw } from 'twind'
import Navbar from '../components/Navbar'
import prodiumPic from '../../public/images/tribune.png'

const Home = () => {
  return (
    <div>
      <Head>
        <title>ไม่รู้</title>
      </Head>
      <main className={tw`px-2`}>
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
          />

          <div className={tw`my-5`}>
            <button
              className={tw`bg-blue-500 hover:bg-blue-700 text-white text-2xl py-4 px-6 rounded mx-3`}
            >
              เอาตรง ๆ ค่ะท่าน
            </button>
            <button
              className={tw`bg-blue-500 hover:bg-blue-700 text-white text-2xl py-4 px-6 rounded mx-3`}
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

export default Home
