// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// help get auth from firebase file we created
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCpXFKgwlKT3B1HKHuxGLfTbKZIVIA4i4Y",
  authDomain: "e-commerce-app-10bf3.firebaseapp.com",
  projectId: "e-commerce-app-10bf3",
  storageBucket: "e-commerce-app-10bf3.appspot.com",
  messagingSenderId: "552176541910",
  appId: "1:552176541910:web:ca6d88af07637383742977"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile };
