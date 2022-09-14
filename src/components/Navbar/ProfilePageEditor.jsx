import React from 'react'
import { useState } from 'react';
import EditUser from './EditUser';
 
function EditProfilePage({changeToFalse}) {
  // Set multiple states to hold the value for address information
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  // Function called when 'Save' button is clicked
    const onSave = () => {}
    //   const uid = firebaseApp.auth().currentUser.uid;   // Stores firebase user ID 
    //   const data = {
    //     uid,
    //     address,
    //     city,
    //     state,
    //     zip
    //   }
    //   const result = EditUser(data);

    //   if (result === true) {
    //     console.log("User info edited")
    //   } 
       
    //   if (result === false) {
    //     console.log("ERROR")
    //   }
    // }


  return (
    // Have Address and input in same container styled with flex direction columns
    <div>
      <h1 className="text-gray-700 text-5xl">
        Personal Info
      </h1>
      <h2 className="font-medium text-lg mt-4" >
        Address:
        <input className="profile-item" type="text" onChange={event=>setAddress(event.target.value)} />

      </h2>
      <h3 className="font-medium text-lg">
        City:
        <input className="profile-item" type="text" onChange={event=>setCity(event.target.value)} />

      </h3>
      <h4 className="font-medium text-lg">
        State:
        <input className="profile-item" type="text" onChange={event=>setState(event.target.value)} />

      </h4>
      <h5 className="font-medium text-lg">
        ZIP Code:
        <input className="profile-item" type="text" onChange={event=>setZip(event.target.value)} />
      </h5>
      <div className="flex" >
        <button className="edit-profile-buttons mr-2" onClick={() => changeToFalse()}>Back</button>
        <button className="edit-profile-buttons" onClick={onSave} >Save</button>
      </div>
    </div>
  )
}

export default EditProfilePage;

{/* <h1 className="text-gray-700 text-5xl">
        Personal Info
      </h1>
      <h2 className="font-medium text-lg mt-4" >
        Address:
        <input className="profile-item" value="address" type="text" />
      </h2>
      
      <h3 className="font-medium text-lg">
        City:
        <input className="profile-item" value="city" type="text" />
      </h3>
      
      <h4 className="font-medium text-lg">
        State:
        <input className="profile-item" value="state" type="text" />
      </h4>
      
      <h5 className="font-medium text-lg">
        ZIP Code:
        <input className="profile-item" value="zipcode" type="text" />
      </h5> */}