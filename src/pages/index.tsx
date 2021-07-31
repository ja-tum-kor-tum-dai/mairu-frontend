import Head from 'next/head'
import { tw } from 'twind/shim'

const Home = () => {
  return (
    <div>
      <Head>
        <title>ไม่รู้</title>
      </Head>
      <main className={tw`h-screen w-screen flex justify-center items-center`}>
        <h1 className={tw`text-5xl`}>ก็บอกว่าไม่รู้ไง!</h1>
      </main>
    </div>
  )
}

export default Home
