import React from 'react'
import { useState } from 'react';
import EditProfilePage from './EditProfilePage';

function ProfilePage(props) {

  // class personalInfo extends ProfilePage {
  //    constructor(props) {
  //     super(props);
  //     this.state = {
  //       address: '',
  //       city: '',
  //       state: '',
  //       zip: '',
  //       editMode:'false',
  //       buttonAction: 'edit'
  //     }
  //   }
  // }
   

  //   function onEditClick () {
  //     if(false) {
  //       this.setState({profileBtnActionName: "Save"})
  //       this.setState({editMode: true})
  //   } else {
  //       this.setState({profileBtnActionName: "Edit"})
  //       this.setState({editMode: false})
  //   }
  //   }

  // const [editMode, setEditMode] = useState(false);

  // function editToFalse () {
  //   setEditMode(false);
  // }

  return (
    // <React.Fragment>
    // {editMode === true ? (
    //   <div>
    //     <EditProfilePage changeToFalse={editToFalse}/>
    //   </div>
    // ) : (
    //   <div>
    //   <div className="col-start-2 col-end-5">
    //   <h1 className="text-gray-700 text-5xl">
    //     Personal Info
    //   </h1>
    //   <h2 className="font-medium text-lg mt-4" >
    //     Address:
    //     <div className="profile-item">
    //       1234 Lettuce Drive{this.state.address}
    //     </div>
    //   </h2>
      
    //   <h3 className="font-medium text-lg">
    //     City:
    //     <div className="profile-item">
    //       Sacramento{this.state.city}
    //     </div>
    //   </h3>
      
    //   <h4 className="font-medium text-lg">
    //     State:
    //     <div className="profile-item">
    //       California{this.state.state}
    //     </div>
    //   </h4>
      
    //   <h5 className="font-medium text-lg">
    //     ZIP Code:
    //     <div className="profile-item">
    //       95624{this.state.zip}
    //     </div>
    //   </h5>
    //   <button onClick={() => setEditMode(true)} >Edit</button>
    // </div>
    // </div>
    // )}
    // </React.Fragment>

    <div className="col-start-2 col-end-5">
      <h1 className="text-gray-700 text-5xl">
        Personal Info
      </h1>
      <h2 className="font-medium text-lg mt-4" >
        Address:
        <div className="profile-item">
          1234 Lettuce Drive{props.address}
        </div>
      </h2>
      
      <h3 className="font-medium text-lg">
        City:
        <div className="profile-item">
          Sacramento{props.city}
        </div>
      </h3>
      
      <h4 className="font-medium text-lg">
        State:
        <div className="profile-item">
          California{props.state}
        </div>
      </h4>
      
      <h5 className="font-medium text-lg">
        ZIP Code:
        <div className="profile-item">
          95624{props.zip}
        </div>
      </h5>
    </div>
  )
}

export default ProfilePage;