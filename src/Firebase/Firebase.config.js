// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe8jUqbAsbocXxVc3EOp4nmXIXDMFFYGs",
  authDomain: "fir-authentication-1-cbaf9.firebaseapp.com",
  projectId: "fir-authentication-1-cbaf9",
  storageBucket: "fir-authentication-1-cbaf9.appspot.com",
  messagingSenderId: "1095714651174",
  appId: "1:1095714651174:web:d6d7ff129713c9a1f5fae7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 
export const auth = getAuth(app)