import React, {useState} from 'react';
import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import './SignIn.css'

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleClick = () => {
    console.log('handleclick')
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(userCredential)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage)
      // ..
    });
  }


  return (
    <React.Fragment>
      {/* If user exists, then we are logged in. Display appropriate sign in/sign out buttons */}
      {user ? 
        <React.Fragment>
          {/* <p>Welcome {user.displayName}</p> */}
          <button className="navbar-item" onClick={() => auth.signOut()}>Sign Out</button> 
        </React.Fragment>
        : 
        <React.Fragment>
          <button className="navbar-item" onClick={signInWithGoogle}>Sign in with Google</button>
          {/* Save sign in with email as a later feature */}
          {/* <button>Sign in with email</button> */}
        </React.Fragment>
      }

      {/* <input type='email' className='border border-sky-500' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
      <button onClick={createNewUser}>Create Account</button> */}

      {/* <button onClick={checkUser}>Check if I'm logged in</button> */}
    </React.Fragment>
  )
}
