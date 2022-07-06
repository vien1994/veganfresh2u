import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    <div>
      <input type='email' className='border border-sky-500' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}
