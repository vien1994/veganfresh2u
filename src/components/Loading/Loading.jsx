import React from 'react'
import loading from '../../img/Ellipsis-1s-200px.svg';

// Displays Loading animation in the center of the screen with a semi-transparent background
// Is used in App.js and can be used by calling showLoading(true) from the Provider.jsx file.
const Loading = () => {
  return (
    <React.Fragment>
      <div className='fixed z-40 h-screen w-screen bg-loading opacity-70'/>
      <img src={loading} alt='loading...' className='z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
    </React.Fragment>
  )
}

export default Loading
