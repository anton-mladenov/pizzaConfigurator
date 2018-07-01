import React, { Component } from 'react'
import { pizzaToppings } from "../pizzaDB"
import { addTopping, calcPrice } from "../actions/pizzaActions"
import { connect } from "react-redux"

class PizzaTopping extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			value: pizzaToppings[0].id,
			price: pizzaToppings[0].price
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleChange(event) {
		this.setState({
			value: event.target.value,
			price: event.target.price
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		let id = Number(this.state.value)
		let price = Number(this.state.price)
		this.props.addTopping(id, price)
		this.props.calcPrice()
	}

	showPizzaToppings = () => {
		return pizzaToppings.map(topping => <option key={topping.id} value={topping.id} price={topping.price} >{topping.name}, &euro;{topping.price}</option>)
	}

	render() {	
		
		return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<label>
				Choose Toppings (max. 3):
					<select value={this.state.value} onChange={this.handleChange}>
						{this.showPizzaToppings()}
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
		)
	}
}

export default connect(null, { addTopping, calcPrice })( PizzaTopping )