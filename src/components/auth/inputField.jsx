// src/components/EmailInput.jsx
import React from 'react';
import { styles } from '../../style';

export default function EmailInput() {

    return (
        <div className='w-full relative'>
            <label htmlFor="email"></label>
            <input
                className={`${styles.blackText} ${styles.inputFiled}`}
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email address'
                required
            />
            <p className={`${styles.formError} top-3.5  error_message`}>Email entered is not valid</p>
        </div>
    );
}
