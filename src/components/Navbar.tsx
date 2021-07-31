import { tw } from 'twind'

const Navbar = () => {
  return (
    <div
      className={tw`flex justify-center items-center space-x-16 text-xl text-center my-14`}
    >
      <a href="" className={tw`hover:text-gray-600`}>
        ถามคำถามท่าน
      </a>
      <a href="" className={tw`hover:text-gray-600`}>
        สุ่มวลีเด็ด ๆ
      </a>
      <a href="" className={tw`hover:text-gray-600`}>
        สร้างวลีเด็ด ๆ
      </a>
      <a href="" className={tw`hover:text-gray-600`}>
        ไม่รู้ API
      </a>
    </div>
  )
}

export default Navbar
