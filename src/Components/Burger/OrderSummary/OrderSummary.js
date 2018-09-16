import React from 'react'
import Wrap from '../../hoc/Wrap'
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
	const ingredientList = Object.keys(props.ingredients)
	    .map((key) =>
		<li key = {key}>
			<span style = {{textTransform: 'capitalize'}}> {key} </span> : {props.ingredients[key]}
		</li> )
	return (
	    <Wrap>
		    {/* 		     */}
		    <h3> Your Order </h3>
		    <p> An amazing burger with : </p>
		    <ul> {ingredientList} </ul>
		    <p> Continue to Checkout?</p>
		    <p> <strong>Total Price ${props.price.toFixed(2)} </strong></p>
		    <Button type = 'Success' clicked = {props.purchase}> Continue </Button>
		    <Button type = 'Danger' clicked = {props.cancel}> Cancel</Button>
	    </Wrap>
	)
}
export  default OrderSummary