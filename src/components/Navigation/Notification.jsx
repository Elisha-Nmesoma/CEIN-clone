import React from 'react'
import { styles } from '../../style'
import screenWidth from '../functions/screenWidth'

export default function Notification() {
  //function to cal the screenwidth function
  const isDesktop = screenWidth()

  return (
      <div className={`${styles.blackColour} text-100 lg:py-3.5 py-2 px-1 text-neutral-100 cursor-pointer`} >

        {isDesktop ? (
           //For desktop
          <p> Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now</p>
        ) : (
          // For mobile 
         <p>The Archive Sale is live. Starting at 20% off. Shop now.</p>
        )}

    </div>
  )
}
