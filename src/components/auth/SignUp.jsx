// src/components/form/SignUp.jsx
import React, { useState, useEffect, useContext } from 'react';
import { styles } from '../../style';
import { Link } from 'react-router-dom';
import { show, hide } from '../../assets';
import GoogleBtn from './googleBtn';
import { useAuth } from './authContex';
import ScreenWidth from '../functions/screenWidth';
import { useNavigate } from 'react-router-dom';

function Password({ userData, setUserData, error, setError }) {
    //password visisbity
    const [passwordVisibility1, setPasswordVisibility1] = useState(false);
    const [passwordVisibility2, setPasswordVisibility2] = useState(false);

    //password icon visibilty
    const handleToggle = (fieldNumber) => {
        if (fieldNumber === 1) {
            setPasswordVisibility1(!passwordVisibility1);
        } else {
            setPasswordVisibility2(!passwordVisibility2);
        }
    };

    return (
        < div className={`${styles.flex4} relative`}>
            {/* password */}
            <div className="relative">
                <input
                    type={passwordVisibility1 ? 'text' : 'password'}
                    name='password'
                    placeholder='Enter your password'
                    id='password'
                    className={` ${styles.authInputFiled}`}
                    value={userData.password}
                    onChange={(e) => { setUserData({ ...userData, password: e.target.value }),
                    setError(null)}} />
                {error && <p className={styles.formError}>{error}</p>}
                <div className='w-fit h-[.875rem] cursor-pointer absolute top-3 right-2'>
                    <img
                        src={passwordVisibility1 ? show : hide}
                        alt={passwordVisibility1 ? 'Show password' : 'Hide password'}
                        onClick={() => handleToggle(1)}
                    />
                </div>
            </div>

            {/* confirm password */}
            <div className="relative">
                <input
                    type={passwordVisibility2 ? 'text' : 'password'}
                    name='confirm_password'
                    placeholder='Confirm your password'
                    id='confirm_password'
                    className={` ${styles.authInputFiled}`}
                    onChange={(e) => { setUserData({ ...userData, confirmPassword: e.target.value })}} />
               {error && <p className={styles.formError}>{error}</p>}
                <div className='w-fit h-[.875rem] cursor-pointer absolute top-3 right-2'>
                    <img
                        src={passwordVisibility2 ? show : hide}
                        alt={passwordVisibility2 ? 'Show password' : 'Hide password'}
                        onClick={() => handleToggle(2)}
                    />
                </div>
            </div>

            <button
                className={`${styles.Button} rounded-[.2rem] text-300 flex items-center justify-center gap-2`}
                type="submit">
                Create Account
            </button>
        </div>
    )
}
function Email({ userData, setUserData }) {
    return (
        <div className={`${styles.flex4}`}>
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
                    }} />
            </div>

            {/* username */}
            <div className='w-full relative'>
                <input
                    className={`${styles.blackText} ${styles.authInputFiled}`}
                    type='displayName'
                    name='displayName'
                    id='displayName'
                    placeholder='Enter a username'
                    value={userData.displayName}
                    onChange={(e) => {
                        setUserData({ ...userData, displayName: e.target.value })
                    }} />
            </div>
        </div>
    )
}
function Form() {
    const navigate = useNavigate();
    // checks desktop and mobile wiidth
    const isDesktop = ScreenWidth();
    // show password on desktop
    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const { signupWithEmail } = useAuth();
    const [userData, setUserData] = useState({ email: '', displayName: '', password: '' , confirmPassword: ''});
    const [error, setError] = useState(null);

    // signup function
    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null)
        if (!userData.email || !userData.password || !userData.displayName) {
            setError('All fields are required');
            return;
          }
        if (userData.password !== userData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await signupWithEmail(userData.email, userData.password, userData.displayName);
            setError(null);
            navigate('/')
        } catch (error) {
            setError(error.message);
        }
    };
    // next btn 
    const handleNextClick = (e) => {
        e.preventDefault();
        setShowPasswordFields(true);
    };

    return (
        <form onSubmit={handleSignUp}>
        {isDesktop ? (
            <div className={styles.flex4}>
                {!showPasswordFields ? (
                    <>
                        <Email userData={userData} setUserData={setUserData} />
                        <button
                            className={`${styles.Button} rounded-[.2rem] flex items-center justify-center gap-1`}
                            onClick={handleNextClick}>
                            Next
                            <span className='text-300'> &gt; </span>
                        </button>
                    </>
                ) : (
                    <Password userData={userData} setUserData={setUserData} error={error} setError={setError} />
                )}
            </div>
        ) : (
            <div className={styles.flex4}>
                <Email userData={userData} setUserData={setUserData} />
            <Password userData={userData} setUserData={setUserData} error={error} setError={setError} />
            </div>
        )}
    </form>
    )
}

export default function SignUp() {
    return (
        <div className="authFirst_continer">
            <div className="authSecond_conatiner">
                {/* BOX */}
                <div className=" authMain_container ">
                    {/* IMAGE CONTAINER */}
                    <div className="authImg_container">
                        <img src="https://res.cloudinary.com/dyknfomwp/image/upload/v1716479518/e-commerce-app/cf6daca3-b118-4db6-b66d-8768d751d109.png" alt="" className="object-cover" />
                    </div>
                    {/* FORM CONTAINER */}
                    <div className="authForm_container ">
                        <h1 className='text-900 text-center'>Create Your Account </h1>
                        <p >Unlock rewards, discover your style, and checkout faster.</p>

                        <div className={`${styles.flex4} `}>
                            {/* onSubmit={handleSubmit} */}
                            <Form />

                            <div className="relative py-2 flex justify-center items-center text-300">
                                <hr className="w-full" />
                                <p className="absolute bg-neutral-50 w-fit h-1 flex items-center">or</p>
                            </div>

                            <GoogleBtn />

                            <div className=' text-center'>
                                <p>
                                    Already have an account?
                                    <Link
                                        to="/auth/login"
                                        className='no-underline ml-1 text-blue-800 '>
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
