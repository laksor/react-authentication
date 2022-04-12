// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIGVJDJbV4q0S8pkM3XmIzMY2ldvtIbos",
  authDomain: "react-auth-20f4e.firebaseapp.com",
  projectId: "react-auth-20f4e",
  storageBucket: "react-auth-20f4e.appspot.com",
  messagingSenderId: "688067136952",
  appId: "1:688067136952:web:3fb3c55214b537fae3934d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;