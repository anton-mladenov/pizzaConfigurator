import React, { Component } from 'react'
import { connect } from "react-redux"

class PizzaPrice extends Component {
	
	
	
	render() {
		return (
		<div>
			<h1> {this.props.price} </h1>
		</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		price: state.pizzaPrice
	}
}

export default connect(mapStateToProps, {  })( PizzaPrice )