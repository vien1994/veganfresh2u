import React from 'react'

function ProfilePage(props) {
    const dummyProfile = [{
       address: '1234 Lettuce Drive',
       city: 'Sacramento',
       state: 'California',
       zipcode: '95624'
     }];

  return (
    <div className="col-start-2 col-end-5">
      <h1 className="text-gray-700 text-5xl">
        Personal Info
      </h1>
      <h2 className="font-medium text-lg mt-4" >
        Address:
      </h2>
      <div className="profile-item">
        1234 Lettuce Drive{props.address}
      </div>
      <h3 className="font-medium text-lg">
        City:
      </h3>
      <div className="profile-item">
        Sacramento{props.city}
      </div>
      <h4 className="font-medium text-lg">
        State:
      </h4>
      <div className="profile-item">
        California{props.state}
      </div>
      <h5 className="font-medium text-lg">
        ZIP Code:
      </h5>
      <div className="profile-item">
        95624{props.zipcode}
      </div>
    </div>
  )
}

export default ProfilePage;