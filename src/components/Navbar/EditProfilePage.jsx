import React from 'react'

export default function EditProfilePage(editToFalse) {
  return (
    <div>
        <div onClick={() => editToFalse()} >Back</div>
        <input value="address"/>
        <input value="city"/>
        <input value="state"/>
        <input value="zipcode"/>
        <button>Confirm</button>
    </div>
  )
}
