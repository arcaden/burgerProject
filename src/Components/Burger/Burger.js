import React from 'react'
import classes from './BurgerDone.css'
import Ingredient from './Ingredient/Ingredient'

const Burger = (props) => {
	let ingredients = Object.keys( props.ingredients )
	    .map( igKey => {
		    return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
			    return <Ingredient key={igKey + i} type={igKey} />;
		    } )
	    } ).reduce((acc, val) => acc.concat(val), [])

	if (ingredients.length === 0) {
		ingredients = <p> Your burger is currently empty </p>
	}
	return (
	    <div className={classes.Burger}>
		    <Ingredient type='bread-top'/>
		    	{ingredients}
		    <Ingredient type='bread-bottom'/>
	    </div>
	)
}

export default Burger