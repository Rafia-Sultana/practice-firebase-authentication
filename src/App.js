
import './App.css';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import app from './firebase.init';

import { useState } from 'react';
const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(error => {
        console.error(error)
      })

  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      })
  }
  const handleGithubSignIn = () => {

    signInWithPopup(auth, gitProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(error => {
        console.error(error);
      })
  }
  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleSignOut}>SignOut</button> : <>
          <button onClick={handleGoogleSignIn}>Google Sign In </button>
          <button onClick={handleGithubSignIn}>GitHub Sign In</button>
        </>
      }

      <p>{user.displayName}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
