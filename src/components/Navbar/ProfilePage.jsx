import React from 'react'
import { useState } from 'react';
import ProfilePageEditor from './ProfilePageEditor';

function ProfilePage() {
  const [editMode, setEditMode] = useState(false);

  function editToFalse () {
    setEditMode(false);
  }

  return (
    <React.Fragment>
    <div className="col-start-2 col-end-5">
    {editMode === true ? (
      <div>
        <ProfilePageEditor editProfToFalse={editToFalse}/>
      </div>
    ) : (
      <div>
      <h1 className="text-gray-700 text-5xl">
        Personal Info
      </h1>
      <h2 className="font-medium text-lg mt-4" >
        Address:
        <div className="profile-item">
          1234 Lettuce Drive
        </div>
      </h2>
      
      <h3 className="font-medium text-lg">
        City:
        <div className="profile-item">
          Sacramento
        </div>
      </h3>
      
      <h4 className="font-medium text-lg">
        State:
        <div className="profile-item">
          California
        </div>
      </h4>
      
      <h5 className="font-medium text-lg">
        ZIP Code:
        <div className="profile-item">
          95624
        </div>
      </h5>
      <button className="edit-profile-buttons" onClick={() => setEditMode(true)} >Edit</button>
    </div>
    )}
    </div>
    </React.Fragment>

    // <div className="col-start-2 col-end-5">
    //   <h1 className="text-gray-700 text-5xl">
    //     Personal Info
    //   </h1>
    //   <h2 className="font-medium text-lg mt-4" >
    //     Address:
    //     <div className="profile-item">
    //       1234 Lettuce Drive{props.address}
    //     </div>
    //   </h2>
      
    //   <h3 className="font-medium text-lg">
    //     City:
    //     <div className="profile-item">
    //       Sacramento{props.city}
    //     </div>
    //   </h3>
      
    //   <h4 className="font-medium text-lg">
    //     State:
    //     <div className="profile-item">
    //       California{props.state}
    //     </div>
    //   </h4>
      
    //   <h5 className="font-medium text-lg">
    //     ZIP Code:
    //     <div className="profile-item">
    //       95624{props.zip}
    //     </div>
    //   </h5>
    // </div>
  )
}

export default ProfilePage;