import React, { Component } from 'react'
import { pizzaSauces } from "../pizzaDB"
import { addSauce } from "../actions/pizzaActions"
import { connect } from "react-redux"

class PizzaSauce extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			value: pizzaSauces[0].id,
			price: pizzaSauces[0].price
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
		this.props.addSauce(id, price)
	}

	showPizzaSauces = () => {
		return pizzaSauces.map(sauce => <option key={sauce.id} value={sauce.id} price={sauce.price} >{sauce.name}, &euro;{sauce.price}</option>)
	}

	render() {	
		
		return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<label>
				Choose Sauces:
					<select value={this.state.value} onChange={this.handleChange}>
						{this.showPizzaSauces()}
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
		)
	}
}

export default connect(null, { addSauce })( PizzaSauce )