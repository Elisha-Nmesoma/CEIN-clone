import React, { useContext } from 'react'
import { styles } from "../../../style"
import { ModalContext } from '../../functions/ModalPopup'

export default function ShopNow() {
  const { signUpShow } = useContext(ModalContext)
  return (
    <>
      <button className={` ${styles.whiteBtn} `} onClick={signUpShow}>
        Shop Now
      </button>
    </>
  )
}
