import React, { useState, useContext } from 'react';
import { createUserWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import Context from '../../store/Context';
import profile from '../../img/profile.svg';
import HeaderCart from '../Cart/HeaderCart';
import ProfileDropdown from './ProfileDropdown';

/**
 * Functional component for signing in/creating users in our database using google's firebase.
 * A user can click the button to sign in with google and it will create an account for them in our database if it doesn't alread exist.
 * 
 * Workflow: When signed in, the 'Sign Out' button appears. When signed out, the 'Sign In' button appears.
 *           If a user is signed in, it will show a profile picture and have it's own dropdown.
 */
export default function SignIn() {
  const context = useContext(Context);
  const { showCartHandler, show } = context;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const auth = context.auth;
  const provider = new GoogleAuthProvider();
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if user is signed in. Signed in - User is an object. Signed out - User is null. 
  const [user] = useAuthState(auth);

  // Create a new user with an email and password. This feature can be saved for later.
  const createNewUser = () => {
    console.log('Creating a new user with email & password.')
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      // console.log(userCredential)
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage)
      // ..
    });
  }

  // Use firebase's function, signInWithPopup, to sign in with google.
  const signInWithGoogle = () => {
    console.log('Signing in with Google');
    signInWithRedirect(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...

      auth.currentUser.getIdTokenResult()
      .then((idTokenResult) => {
        if (!!idTokenResult.claims.admin) {
          // Show admin UI.
          setIsAdmin(true);
        } else {
          // Show regular user UI.
          setIsAdmin(false);
        }
      })

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      console.log(errorCode, errorMessage, email, credential)
    });
  }

  // For testing purposes. Manually view the current user details in the console.
  const checkUser = () => {
    // Log basic user info
    console.log(auth.currentUser);
    
    // Log if a user is an admin or not
    auth.currentUser.getIdTokenResult()
      .then((idTokenResult) => {
        if (!!idTokenResult.claims.admin) {
          // Show admin UI.
          console.log('Is an admin.')
        } else {
          // Show regular user UI.
          console.log('Not an admin.')
        }
      })
  }


  return (
    <React.Fragment>
      {/* If user exists, then we are logged in. Display appropriate sign in/sign out buttons */}
      {user ? 
        <React.Fragment>
          {/* <p>Welcome {user.displayName}</p> */}

          {/* Profile Picture + Dropdown that appears when the mouse hovers over the item*/}
          <div onMouseLeave={() => setShowProfileDropdown(false)} onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
            <img src={profile} alt='profile' className='w-10 p-2 m-2 bg-gray-300 rounded-full' onMouseEnter={() => setShowProfileDropdown(true)}/>
            {showProfileDropdown === true ? 
              <ProfileDropdown/>  
            : 
              null
            }
          </div>

          
          
          {/* <button className="navbar-items border pl-3 pr-3 pt-2 pb-2 text-green-500 hover:border-green-500 whitespace-nowrap" onClick={() => auth.signOut()}>Sign Out</button>  */}
        </React.Fragment>
        : 
        <React.Fragment>
          <button className="navbar-items border pl-3 pr-3 pt-2 pb-2 text-green-500 hover:border-green-500 whitespace-nowrap" onClick={signInWithGoogle}>Log In</button>
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
