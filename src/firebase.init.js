// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-hyPN5KD5vZyu7f_2SaTzEwYm4M-ZxBw",
    authDomain: "practice-firebase-auth-5a79b.firebaseapp.com",
    projectId: "practice-firebase-auth-5a79b",
    storageBucket: "practice-firebase-auth-5a79b.appspot.com",
    messagingSenderId: "218235007664",
    appId: "1:218235007664:web:2f2e7de3150db640d8c175"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;