// src/components/EmailInput.jsx
import React, { useState, useEffect } from 'react';
import { styles } from '../../style';
import { useUserContext } from '../state/UserState';

export default function EmailInput() {
    const { userProfile, setUserProfile } = useUserContext();
    const [email, setEmail] = useState(userProfile.email);

    useEffect(() => {
        setEmail(userProfile.email);
    }, [userProfile.email]);

    const handleEmailChange = async (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        console.log(email, newEmail)
        email && setUserProfile({ ...userProfile, email: newEmail });
        console.log(userProfile, "user profile")
    };

    return (
        <div className='w-full relative'>
            <label htmlFor="email"></label>
            <input
                className={`${styles.blackText} ${styles.inputFiled}`}
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email address'
                value={email}
                required
                onChange={handleEmailChange}
            />
            <p className={`${styles.formError} top-3.5  error_message`}>Email entered is not valid</p>
        </div>
    );
}
