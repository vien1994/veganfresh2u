import React from 'react'
import './Input.css'

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input flex items-center self-center">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  )
});
// Are props allowed in a functional component
export default Input;