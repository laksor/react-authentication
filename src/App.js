import './App.css';
import app from './firebase.init';
import {getAuth} from 'firebase/auth';

const auth = getAuth(app);

function App() {
  const googleSignIn = () =>{
    
  }
  return (
    <div className="App">
      <button onClick={googleSignIn}>Sign in</button>
    </div>
  );
}

export default App;
