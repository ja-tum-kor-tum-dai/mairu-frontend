import React from 'react'
import { tw } from 'twind'
import Navbar from '../components/Navbar'

const CenterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={tw`min-h-screen flex flex-col justify-center items-center`}
      style={{ paddingBottom: 60 }}
    >
      {children}
      <Navbar />
    </main>
  )
}

export default CenterLayout
