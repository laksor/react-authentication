import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState([]);

  const googleProvider = new GoogleAuthProvider();
  const provider = new GithubAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {});
  };

  const googleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };

  const githubSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      setUser(user);
    })
    .catch((error) => {});
  };
  return (
    <div className="App">
      <button onClick={googleSignIn}>Google Sign in</button>
      <button onClick={githubSignIn}>Github sign in</button>
      <button onClick={googleSignOut}>Sign out</button>
      <h2>user: {user.displayName}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default App;
