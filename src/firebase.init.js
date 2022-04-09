// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ2RCmDQSTwjKdoQFuqJNZJ8mK86ZfnRQ",
    authDomain: "ema-john-simple-96fd8.firebaseapp.com",
    projectId: "ema-john-simple-96fd8",
    storageBucket: "ema-john-simple-96fd8.appspot.com",
    messagingSenderId: "976458601698",
    appId: "1:976458601698:web:1dabd7f8417d3de35e3abb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;