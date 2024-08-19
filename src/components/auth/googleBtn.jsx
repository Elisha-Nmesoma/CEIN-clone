import React from 'react'
import { google } from '../../assets'
import { useAuth } from './authContex';

export default function GoogleBtn() {
    const { signInWithGoogle } = useAuth();
    return (
        <>
            <button className="flex items-center justify-center gap-2 md:gap-6 py-2 px-2 ring-1 ring-orange-100 rounded-md "
               onClick={signInWithGoogle}>
                <img
                    src={google}
                    alt=""
                    className="object-contain w-5 h-5"
                />
                <span>Sign in with Google</span>
            </button>
        </>
    )
}
