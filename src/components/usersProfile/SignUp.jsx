// src/components/SignUp.jsx
import React from 'react';
import { footerLogo } from '../../assets';
import { styles } from '../../style';
import createAccountForm from '../functions/createAccForm';
import { useUserContext } from '../state/UserState';
import ScreenWidth from '../functions/screenWidth';

export default function SignUp() {
   const isDesktop = ScreenWidth()
    const { userProfile } = useUserContext();
    const { showPassword, validatePassword, changeUsername, changePassword, confirmPassword } = createAccountForm();
    console.log(userProfile, "user-profile")

    return (
        <div className='bg-Dim md:w-full flex items-center justify-center'>
            <div className={`bg-neutral-50 h-full ${styles.padding} ${styles.blackText} text-300 text-center ${isDesktop ? "w-[30rem] relative" : undefined }`}>
                <div className={`${styles.flex5}`}>
                    <div className={`${styles.flex3}`}>
                        <h1 className='text-600 text-center'>One more Step to go<p>{userProfile.email}</p>  </h1>
                        <p>Type your username and password create a Cein account.</p>
                    </div>

                    <form className={`${styles.flex6} `}>
                        <div className='relative'>
                            <input
                                type='text'
                                name='username'
                                placeholder='Enter your username'
                                id='username'
                                className={`${styles.inputFiled}`}
                                onChange={changeUsername}
                            />
                            <p id="username_error" className={styles.formError}></p>
                        </div>

                        <div className={`${styles.flex6} relative`}>
                            <div className="relative">
                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Enter your password'
                                    id='password'
                                    className={`${styles.inputFiled}`}
                                    onChange={changePassword}
                                />
                                <p id="password_error" className={styles.formError}></p>
                            </div>

                            <div className="relative">
                            <input
                                type='password'
                                name='confirm_password'
                                placeholder='Confirm your password'
                                id='confirm_password'
                                className={`${styles.inputFiled}`}
                                onChange={confirmPassword}
                            />
                             <p id="confirmPassword_error" className={styles.formError}></p>
                            </div>
                            <div className=''>
                                <label className={`flex gap-1 w-fit`} >
                                    <input type="checkbox"
                                        onClick={showPassword}
                                    />
                                    <p id='toggle_password'>Show Password</p>
                                </label>
                            </div>
                        </div>

                        <button
                            className={`${styles.Button}`}
                            onClick={validatePassword}
                        >
                            SignUp
                        </button>
                    </form>
                </div>
                <div className={`fixed md:absolute bottom-5 left-0 w-full flex flex-col items-center justify-center gap-10`}>
                    <p>For further support, you may visit the Help Center or contact our customer service team.</p>
                    <div className='w-fit'>
                        <img src={footerLogo} className='cursor-default' />
                    </div>
                </div>
            </div>
        </div>
    );
}
