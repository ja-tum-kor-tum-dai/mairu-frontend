import Link from 'next/link'
import { tw } from 'twind'

const Navbar = () => {
  return (
    <nav
      className={tw`flex justify-center items-center space-x-2 md:space-x-8 lg:space-x-16 sm:text-xs md:text-base lg:text-xl text-center justify-self-end`}
    >
      <Link href="/">
        <a className={tw`hover:text-gray-600`}>ถามคำถามท่าน</a>
      </Link>
      <Link href="/random">
        <a className={tw`hover:text-gray-600`}>สุ่มวลีเด็ด ๆ</a>
      </Link>
      <Link href="/create">
        <a className={tw`hover:text-gray-600`}>สร้างวลีเด็ด ๆ</a>
      </Link>
      <a href="" className={tw`hover:text-gray-600`}>
        ไม่รู้ API
      </a>
    </nav>
  )
}

export default Navbar
