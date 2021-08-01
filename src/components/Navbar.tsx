import Link from 'next/link'
import { tw } from 'twind'
import { textSmall, textNavbar } from '../styles/components'

const Navbar = () => {
  return (
    <nav
      className={tw`flex(& col) justify-center text-center ${textSmall} justify-self-end`}
    >
      <div
        className={tw`flex justify-center items-center space-x(2 md:8 lg:16) mb-3`}
      >
        <Link href="/">
          <a className={tw`${textNavbar}`}>ถามคำถาม</a>
        </Link>
        {/* <Link href="/random">
          <a className={tw`${textNavbar}`}>สุ่มวลีเด็ด ๆ</a>
        </Link>
        <Link href="/create">
          <a className={tw`${textNavbar}`}>สร้างวลีเด็ด ๆ</a>
        </Link> */}
        <a href="https://github.com/ja-tum-kor-tum-dai/mairu-frontend" className={tw`${textNavbar}`}>
          ไม่รู้เอพีไอ
        </a>
      </div>
      <span className={tw`text-xs`}>สร้างด้วยใจ โดย ไม่รู้ๆๆๆๆ</span>
    </nav>
  )
}

export default Navbar
