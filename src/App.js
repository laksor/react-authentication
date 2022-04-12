import "./App.css";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState([]);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then( (result) => {
      const user = result.user;
      setUser(user);
    })
    .catch(error =>{

    })
  }

  const googleSignOut = () =>{
    signOut(auth)
    .then( () => {
      setUser({});
    })
    .catch((error) =>{

    })
  }
  
  return (
    <div className="App">
    {
      user.displayName ? <button onClick={googleSignOut}>sign out</button> 
      :
      <button onClick={googleSignIn}>Google sign in</button>
    }
      <h2>user: {user.displayName}</h2>
      <h2>email:  {user.email}</h2>
    </div>
  );
}

export default App;
