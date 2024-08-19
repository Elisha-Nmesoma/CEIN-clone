import React, { useState, useEffect } from 'react';
import { styles } from '../../style'
import createAccountForm from '../functions/createAccForm';
import { show, hide } from '../../assets';
import { Link } from 'react-router-dom';
import GoogleBtn from './googleBtn';
import { useAuth } from './authContex';


export default function Login() {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const { loginWithEmail } = useAuth();
  
    const [userData, setUserData] = useState({ email: '', displayName: '', password: '' , confirmPassword: ''});
    const [error, setError] = useState(null);

//password icon visibilty
const handleToggle = (fieldNumber) => {
 setPasswordVisibility(!passwordVisibility);
};
   
//    login function
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await loginWithEmail(userData.email, userData.password);
            setError(null);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="authFirst_continer">
            <div className="authSecond_conatiner">
                {/* BOX */}
                <div className=" authMain_container">
                    {/* IMAGE CONTAINER */}
                    <div className="authImg_container">
                        <img src="https://res.cloudinary.com/dyknfomwp/image/upload/v1716479518/e-commerce-app/cf6daca3-b118-4db6-b66d-8768d751d109.png" alt="" className="object-cover" />
                    </div>
                    {/* FORM CONTAINER */}
                    <div className="authForm_container">
                        <h1 className='text-900 text-center'>Welcome Back </h1>
                        <p>Log in to your account using your email or Google</p>

                        <form className={`${styles.flex4} relative `} 
                        onSubmit={handleLogin}>

                            <div className='w-full relative'>
                                <input
                                    className={`${styles.blackText} ${styles.authInputFiled}`}
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Enter your email address'
                                    value={userData.email}
                                    onChange={(e) => {
                                        setUserData({ ...userData, email: e.target.value })
                                    }}/>
                            </div>

                            <div className={` relative`}>
                                <input
                                    type={passwordVisibility ? 'text' : 'password'}
                                    name=' current-password'
                                    placeholder='Enter your password'
                                    id='current-password'
                                    autoComplete="current-password"
                                    className={` ${styles.authInputFiled}`}
                                    value={userData.password}
                                    onChange={(e) => {  setUserData({ ...userData, password: e.target.value }) }}
                                />
                                <div className='w-fit h-[.875rem] cursor-pointer absolute top-3 right-2'>
                                    <img
                                        src={passwordVisibility ? show : hide}
                                        alt={passwordVisibility ? 'Show password' : 'Hide password'}
                                        onClick={handleToggle}
                                    />
                                </div>
                            </div>
                            {error && <p className={styles.formError}>{error}</p>}


                            <button type ='submit'
                                className={`${styles.Button} rounded-[.2rem] text-300`}>
                                Login
                            </button>
                        </form>

                        <div className="relative py-2 flex justify-center items-center text-300">
                            <hr className="w-full" />
                            <p className="absolute bg-neutral-50 w-fit h-1 flex items-center">or</p>
                        </div>

                        <GoogleBtn />

                        <div className=' text-center'>
                            <p>
                                Don't have an account?
                                <Link
                                    to="/auth/signUp"
                                    className='no-underline ml-1 text-blue-800 '>
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
