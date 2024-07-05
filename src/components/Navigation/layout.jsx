import React from 'react'
import { Outlet } from 'react-router-dom'
import Notification from './Notification'
import Navbar from './Navbar'
import Footer from '../footer'

export default function Layout() {
  return (
    <>
      <div className='relative flex-1'>
        <Notification />
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
