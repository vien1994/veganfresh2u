import React from 'react'
import MealItemForm from '../Cart/MealItemForm';

function Recipes(props) {
  return (
    <div className="recipe-container relative border border-slate-100">
      <div className="recipe-top-content flex justify-between">
        <div className="">
            <picture className="font-bold">PICTURE GOES HERE</picture>
            <div className="recipe-content-center">
              <a>
                <div>
                  {props.name}
                  <div>{props.with}</div>
                </div>
              </a>
            </div>
              <div className="recipe-tags italic">{props.allergies}</div>
              <div className="recipe-info">
              <div className="recipe-details">{props.nutrition}</div>
            </div>  
        </div>
        <MealItemForm id={props.id}/>
      </div>
    </div>
  )
}

export default Recipes;
