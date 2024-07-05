import React, { useContext, useState } from 'react'
import EmailInput from '../form/inputField'
import { styles } from '../../style'
import { close } from "../../assets/index"
import { ModalContext } from '../functions/ModalPopup'
import SignUp from '../functions/userAuth'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../state/UserState'

export default function Promotion() {
    const navigate = useNavigate()
    const handleEmail = SignUp();
    const { signUpClose } = useContext(ModalContext)
    const { userProfile, setUserProfile } = useUserContext();


    

    return (
        <div className=' bg-Dim md-w-full h-screen flex items-center justify-center'>
            <div className={`${styles.whiteColour} w-[23rem] bp:w-[25rem] md:w-[42rem] md:flex md-flex-row relative z-50`}>

                <div className={`${styles.hidden} w-1/2`}>
                    <img src="https://res.cloudinary.com/dyknfomwp/image/upload/v1717592761/e-commerce-app/f3_spcawv.jpg" className='h-full' />
                </div>

                <div className='px-12 py-16 mb-8 md:mb-auto md:w-[50%]'>
                    <div className='absolute top-3.5 right-3.5 w-[1rem]' autoFocus onClick={signUpClose}>
                        <img src={close} />
                    </div>

                    <div className={`flex flex-col gap-4 items-center ${styles.blackText}`}>

                        <div className={`${styles.blackText} text-center flex flex-col items-center justify-center gap-4`}>
                            <h4 className={`text-300`}>Enter your email to unlock</h4>
                            <h2 className={`text-800 `}>15% off your first order</h2>
                            <p className={`text-300`}>
                                Plus, get insider access to <br className='block md:hidden' />
                                promotions, <br className='block md:hidden' />
                                launches, events, and more.
                            </p>
                        </div>

                        <form onSubmit={handleEmail} className='flex flex-col gap-4 w-fit'>
                            <EmailInput/>
                            <button
                                type='submit'
                                className={`${styles.smallButton} mx-auto`}
                                onClick={() => navigate('/SignUp')}>
                                Unlock Access
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
