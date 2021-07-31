import { tw } from 'twind'

const Navbar = () => {
  return (
    <div
      className={tw`flex justify-center items-center space-x-16 text-xl text-center my-14`}
    >
      <a href="">ถามคำถามท่าน</a>
      <a href="">สุ่มวลีเด็ด ๆ</a>
      <a href="">สร้างวลีเด็ด ๆ</a>
      <a href="">ไม่รู้ API</a>
    </div>
  )
}

export default Navbar
