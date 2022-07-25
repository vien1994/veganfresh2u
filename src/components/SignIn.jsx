import React, {useState} from 'react';
import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

/**
 * Functional component for signing in/creating users in our database using google's firebase.
 * A user can click the button to sign in with google and it will create an account for them in our database if it doesn't alread exist.
 * 
 * Workflow: When signed in, the 'Sign Out' button appears. When signed out, the 'Sign in with Google' button appears.
 */
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // Check if user is signed in. Signed in - User is an object. Signed out - User is null. 
  const [user] = useAuthState(auth);

  // Create a new user with an email and password. This feature can be saved for later.
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

  // Use firebase's function, signInWithPopup, to sign in with google.
  const signInWithGoogle = () => {
    console.log('Signing in with Google');
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

  // For testing purposes. Manually view the current user details in the console.
  const checkUser = () => {
    console.log(auth.currentUser);
  }

  return (
    <React.Fragment>
      {/* If user exists, then we are logged in. Display appropriate sign in/sign out buttons */}
      {user ? 
        <React.Fragment>
          {/* <p>Welcome {user.displayName}</p> */}
          <button className="m-4 font-semibold pr-4" onClick={() => auth.signOut()}>Sign Out</button> 
        </React.Fragment>
        : 
        <React.Fragment>
          <button className="m-4 font-semibold pr-4" onClick={signInWithGoogle}>Sign in with Google</button>
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