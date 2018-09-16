import React from 'react'
import classes from './BurgerControls.css'
import Control from "./Control/Control";

const controlList = [
	{label: 'Salad', type: 'salad'},
	{label: 'Bacon', type: 'bacon'},
	{label: 'Cheese', type: 'cheese'},
	{label: 'Meat', type: 'meat'},
]

const BurgerControls = (props) => {
	const controls = controlList.map(
	    (control) => {
	    	return <Control key = {control.label} label ={control.label}
				    addIngredient = {() => props.addIngredient(control.type)}
				    removeIngredient = {() => props.removeIngredient(control.type)}
				    disabled = {props.disabled[control.type]}
		/>
	    }
	)

	return (
		    <div className={classes.BuildControls}>
			    <p> Current Price : <strong>${props.currentPrice.toFixed(2)} </strong></p>
			    {controls}
			    <button onClick={props.showSummary}
				  className={classes.OrderButton}
				  disabled={props.purchaseable}> Order </button>
		    </div>
	)
}

export default BurgerControls