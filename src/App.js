import "./App.css";
import app from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState([]);

  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {

    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      setUser(user);
    })
    .catch(error =>{
      
    })
  };
  
  return (
    <div className="App">
      <button onClick={googleSignIn}>Google Sign in</button>
    </div>
  );
}

export default App;
