import React from 'react'
import { useState } from 'react';
import EditUser from './EditUser';
 
function EditProfilePage({editProfToFalse}) {
  // Set multiple states to hold the value for address information
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  return (
    // Have Address and input in same container styled with flex direction columns
    <div>
      <h1 className="text-gray-700 text-5xl">
        Personal Info
      </h1>
      <h2 className="font-medium text-lg mt-4" >
        Address:
        <input className="edit-mode-profile-item" type="text" onChange={event=>setAddress(event.target.value)} />

      </h2>
      <h3 className="font-medium text-lg">
        City:
        <input className="edit-mode-profile-item" type="text" onChange={event=>setCity(event.target.value)} />

      </h3>
      <h4 className="font-medium text-lg">
        State:
        <input className="edit-mode-profile-item" type="text" onChange={event=>setState(event.target.value)} />

      </h4>
      <h5 className="font-medium text-lg">
        ZIP Code:
        <input className="edit-mode-profile-item" type="text" onChange={event=>setZip(event.target.value)} />
      </h5>
      <div className="flex" >
        <button className="edit-profile-buttons mr-2" onClick={() => editProfToFalse()}>Back</button>
        <button className="edit-profile-buttons">Save</button>
      </div>
    </div>
  )
}

export default EditProfilePage;
