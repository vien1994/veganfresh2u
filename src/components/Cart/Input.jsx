import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <input className="border border-gray-300 w-1/3 mr-2 pl-2" ref={ref} {...props.input} />
  )
});
// Are props allowed in a functional component
export default Input;