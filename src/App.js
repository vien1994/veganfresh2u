import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
      <div className="text-purple-600 font-bold text-3xl">VeganFresh2U</div>
      <button className="border-2 border-none bg-purple-500 p-2 text-white">Let's Do This!</button>
    </div>
  );
}

export default App;
