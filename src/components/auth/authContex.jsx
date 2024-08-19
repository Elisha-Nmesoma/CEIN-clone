
import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user ? user : null);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  //  signup with email and password
  const signupWithEmail = async (email, password, displayName) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      await updateProfile(user, {
        displayName: displayName
      });

      // Check if the email is verified
    if (!user.emailVerified) {
      throw ('Enter a valid email addresss');
    }

      // Retrieve the updated user profile
    await user.reload();
    const updatedUser = auth.currentUser;

    setUser(updatedUser);

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('Email is already in use');
      }
      if (error.code === 'auth/invalid-email') {
        throw new Error('Invalid email address');
      }
      if (error.code === 'auth/weak-password') {
        throw new Error('Password is too weak');
      }
      throw new Error('Error signing up: ' + error.message);
    }
  };

  // login with email and password
  const loginWithEmail = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        throw new Error('Invalid email address');
      }
      if (error.code === 'auth/wrong-password') {
        throw new Error('Incorrect Password');
      } else if (error.code === 'auth/user-not-found') {
        throw new Error('User not found. Please sign up.');
      } else {
        throw new Error('Error loging in: ' + error.message);
      }
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, loginWithEmail, signupWithEmail, updateProfile, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
