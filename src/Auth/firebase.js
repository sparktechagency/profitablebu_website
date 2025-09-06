// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARWrncB29Cuu9J5yV-HHh_UN5ZOE-KYA8",
  authDomain: "profitable-website.firebaseapp.com",
  projectId: "profitable-website",
  storageBucket: "profitable-website.firebasestorage.app",
  messagingSenderId: "292215850215",
  appId: "1:292215850215:web:30d418a5c878ca2e3e8e42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export default app