import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SignIn from './components/signin';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIUoDfxR18I6_VwMcy8QXD_pnKrserdFg",
  authDomain: "veganfresh2u.firebaseapp.com",
  databaseURL: "https://veganfresh2u-default-rtdb.firebaseio.com",
  projectId: "veganfresh2u",
  storageBucket: "veganfresh2u.appspot.com",
  messagingSenderId: "1041425850896",
  appId: "1:1041425850896:web:b8fdaa9a30f8a5cbf12095",
  measurementId: "G-G1F5BX8209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  // Example of how to load initial data
  // useEffect((),[]) so it does it in the beginning
  // Remove React Strict Mode so it doesn't double invoke
  // Call function in useEffect to load data. Then use axios and call the path with the data
  // Remember to have a proxy set to the server in package.json
  // set the data
  // Don't load the page until the data is set.
  // This works (call still works) when it's built as well

  // const [myData, setMyData] = useState(null);

  // const getData = async () => {
  //   await axios.get('/rest')
  //     .then((response) => {
  //       setMyData(response.data);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // if(!myData) {
  //   return 'loading...';
  // } else {
  //   console.log(myData);
  // }

  return (
    <div className="md:flex">
      <SignIn />
    </div>
  );
}

export default App;
