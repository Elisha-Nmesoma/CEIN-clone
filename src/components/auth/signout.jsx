
import React from 'react';
import { styles } from '../../style'
import { useAuth } from './authContex';

const SignOut = () => {
  const { user, signOutUser } = useAuth();

  return user ? (
    <div className={`${styles.flex4} items-center justify-center h-[calc(100vh-5rem)] p-6 `}>
      <p>Confirm Signout</p>
      <button
        onClick={signOutUser}
        className={`${styles.Button} rounded-[.2rem] md:w-[12rem]`}
      >
        Sign Out
      </button>
    </div>
  ) : null;
};

export default SignOut;

