import React from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import Navbar from './Navigation/Navbar'

export default function ErrorPage() {
  return (
    <div>
      <Navbar />
      <div className={`${styles.flexRow} flex-col gap-12 items-center justify-center h-screen`}>
     <h1 className='text-900'> 404 <span className='text-700 ml-2'> Page Not Found </span></h1> 
      <Link
       to={"/"}
        className={`${styles.whiteBtn}`}>
          Back To Home Page
          </Link>
    </div>
    </div>
  )
}
