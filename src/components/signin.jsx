import React, {useState} from 'react';
import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // Check if user is signed in. Signed in - User is an object. Signed out - User is null. 
  const [user] = useAuthState(auth);

  const createNewUser = () => {
    console.log('Creating a new user with email & password.')
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

  const signInWithGoogle = () => {
    console.log('Signing in with Google')
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  const checkUser = () => {
    console.log(auth.currentUser);
  }

  return (
    <div>
      {user ? 
        <button onClick={() => auth.signOut()}>Sign Out</button> 
        : 
        <React.Fragment>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          <button>Sign in with email</button>
        </React.Fragment>
      }

      <input type='email' className='border border-sky-500' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
      <button onClick={createNewUser}>Create Account</button>

      <button onClick={checkUser}>Check if I'm logged in</button>
    </div>
  )
}
