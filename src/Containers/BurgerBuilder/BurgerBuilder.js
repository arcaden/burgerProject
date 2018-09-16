import React, { Component } from 'react'
import Burger from "../../Components/Burger/Burger"
import Wrap from "../../Components/hoc/Wrap"
import BurgerControls from "../../Components/Burger/BurgerControls/BurgerControls"
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";


const PRICES = {
	salad: 0.5,
	cheese: 0.2,
	meat: 1.2,
	bacon: 0.5
}

class BurgerBuilder extends Component {
	constructor(props){
		super(props)
		this.state = {
			ingredients: {
				salad : 0,
				cheese : 0,
				meat: 0,
				bacon: 0,
			},
			totalPrice: 4,
			purchaseable: false,
			summary: false,
		}
	}
	handleCloseSummary = () => {
		this.setState({
			summary: false
		})
	}

	handleSummary = () => {
		this.setState({
			summary: true,
		})
	}

	updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
		    .map((key) => {
		    	return ingredients[key]
		    })
		    .reduce((sum,i) => {
		    	return sum + i
		    }  ,0)
		this.setState({
			purchaseable: sum > 0,
		})
	}

	handleAddIngredient = (type) => {
		const updatedIngredient = {...this.state.ingredients, [type] : this.state.ingredients[type] + 1}
		const updatedPrice  = this.state.totalPrice+ PRICES[type]
		this.setState({
			ingredients: updatedIngredient,
			totalPrice: updatedPrice
		})
		this.updatePurchaseState(updatedIngredient)
	}

	handleRemoveIngredient = (type) => {
		if (this.state.ingredients[type] > 0) {
			const updatedIngredient = {...this.state.ingredients, [type] : this.state.ingredients[type] -1}
			const updatedPrice = this.state.totalPrice - PRICES[type]
			this.setState({
				ingredients: updatedIngredient,
				totalPrice: updatedPrice,
			})
			this.updatePurchaseState(updatedIngredient)
		}
	}

	handlePurchase = () => {
		alert('You bought the burger!')
	}

	render(){
		const disable  = {...this.state.ingredients}
		for (let key in disable) {
			disable[key] = (disable[key] === 0)
		}

		return (
		    <Wrap>
			    <Modal show = {this.state.summary} closeSummary = {this.handleCloseSummary}
			    >
				    <OrderSummary price ={this.state.totalPrice} ingredients = {this.state.ingredients} cancel ={this.handleCloseSummary} purchase = {this.handlePurchase} />
			    </Modal>
			    <div>
				    <Burger ingredients = {this.state.ingredients} />
			    </div>
			    <div>
				    <BurgerControls
					  addIngredient ={this.handleAddIngredient}
					  removeIngredient = {this.handleRemoveIngredient}
					  disabled = {disable}
					  currentPrice = {this.state.totalPrice}
					  purchaseable = {(!this.state.purchaseable)}
					  showSummary = {this.handleSummary}
				    />
			    </div>
		    </Wrap>
		)
	}
}

export default BurgerBuilder