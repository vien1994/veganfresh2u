import React from 'react'
import './Input.css'

function Input(props) {
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  )
}
// Are props allowed in a functional component
export default Input;