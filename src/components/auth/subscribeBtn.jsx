import React from 'react'
import { styles } from '../../style'

export default function Subscribe() {
  return (
   <div className='w-fit'>
     <button 
    className={`${styles.blackColour} ${styles.smallButton} `}
    type="submit">
        Subscribe
    </button>
   </div>
  )
}
