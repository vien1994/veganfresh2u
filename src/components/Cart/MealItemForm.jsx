import React from 'react'
import './MealItemForm.css'
import Input from './Input';

function MealItemForm(props) {
  return (
    <form className='form'>
     <Input label ="Amount" input={{
        id:'amount_' + props.id,
        type:'number',
        min:'1',
        max:'1',
        step: '1',
        defaultValue:'1'
     }}/>
     <button>Add to Cart++</button>
    </form>   
  )
}

export default MealItemForm;
