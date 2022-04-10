//  Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwZ1C3RuMq6l6WI86ZIEmj0GGingpErW4",
    authDomain: "react-authentication-b4f21.firebaseapp.com",
    projectId: "react-authentication-b4f21",
    storageBucket: "react-authentication-b4f21.appspot.com",
    messagingSenderId: "607367416459",
    appId: "1:607367416459:web:35ec93b878e93de688e28e"
  };

  // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app;