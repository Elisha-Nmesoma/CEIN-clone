import React, { useContext, useState } from 'react'
import EmailInput from '../auth/inputField'
import { styles } from '../../style'
import { close } from "../../assets/index"
import { ModalContext } from '../functions/ModalPopup'
import { Link } from 'react-router-dom'

export default function Promotion({closePromotion}) {
   




    return (
        <div className=' bg-Dim md-w-full h-screen flex items-center justify-center'>
            <div className={`${styles.whiteColour} w-[23rem] bp:w-[25rem] md:w-[42rem] md:flex md-flex-row relative z-50`}>

                <div className={`${styles.hidden} w-1/2`}>
                    <img src="https://res.cloudinary.com/dyknfomwp/image/upload/v1717592761/e-commerce-app/f3_spcawv.jpg" className='h-full' />
                </div>

                <div className='px-12 py-16 md:w-[50%] flex items-center justify-center'>
                    <div className='absolute top-3.5 right-3.5 w-[1rem]' autoFocus onClick={closePromotion}>
                        <img src={close} />
                    </div>

                    <div className={`flex flex-col gap-4 items-center ${styles.blackText}`}>

                        <div className={`${styles.blackText} text-center flex flex-col items-center justify-center gap-4`}>
                            <h2 className={`text-800 `}>15% off your first order</h2>
                            <p className={`text-400 px-4`}>
                                Plus, get insider access to 
                                promotions, 
                                launches, events, and more.
                            </p>
                        </div>

                        <Link to='/auth/signUp' >
                            <button
                                className={`${styles.smallButton} mx-auto`}
                                onClick={closePromotion}>
                                Unlock Access
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
