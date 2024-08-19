import React, {  } from 'react'
import { styles } from "../../../style"
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/authContex';

export default function ShopNow() {
  const {user} = useAuth();
  return (
    <>
      <button className={` ${styles.whiteBtn} `} >
        {user ? (
           <Link to=""> Shop Now</Link>
        ) : (
          <Link to="/auth/login" className='px-4'> Login</Link>
        )}
      </button>
    </>
  )
}
