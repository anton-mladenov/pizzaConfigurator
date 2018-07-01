import React, { Component } from 'react'
import { pizzaDeliveryMethods } from "../pizzaDB"
import { delivery, calcPrice } from "../actions/pizzaActions"
import { connect } from "react-redux"

class PizzaDelivery extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			value: pizzaDeliveryMethods[0].id,
			price: pizzaDeliveryMethods[0].price
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
		this.props.delivery(id, price)
		this.props.calcPrice()
	}

	showPizzaDeliveryMethods = () => {
		return pizzaDeliveryMethods.map(delivery => <option key={delivery.id} value={delivery.id} price={delivery.percentageOfBill} >{delivery.name}, %{delivery.percentageOfBill}</option>)
	}

	render() {	
		
		return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<label>
				Choose A Delivery Method:
					<select value={this.state.value} onChange={this.handleChange}>
						{this.showPizzaDeliveryMethods()}
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
		)
	}
}

export default connect(null, { delivery, calcPrice })( PizzaDelivery )