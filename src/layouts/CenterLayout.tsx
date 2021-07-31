import React from 'react'
import { tw } from 'twind'
import Navbar from '../components/Navbar'
import { container } from '../styles/components'

const CenterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={tw`min-h-screen ${container} px-0`}>
      {children}
      <Navbar />
    </main>
  )
}

export default CenterLayout
