import React, { Component } from 'react'
import { pizzaBases } from "../pizzaDB"
import { addBase, calcPrice } from "../actions/pizzaActions"
import { connect } from "react-redux"

class PizzaBase extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			value: pizzaBases[0].id,
			price: pizzaBases[0].price
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
		this.props.addBase(id, price)
		this.props.calcPrice()
	}

	showPizzaBases = () => {
		return pizzaBases.map(base => <option key={base.id} value={base.id} price={base.price} >{base.name}, &euro;{base.price}</option>)
	}

	render() {	
		
		return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<label>
				Choose A Base:
					<select value={this.state.value} onChange={this.handleChange}>
						{this.showPizzaBases()}
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
		)
	}
}

export default connect(null, { addBase, calcPrice })( PizzaBase )
