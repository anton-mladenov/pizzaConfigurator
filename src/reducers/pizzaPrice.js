
import { ADD_BASE, ADD_SAUCE, ADD_TOPPING, DELIVERY_METHOD } from "../actions/pizzaActions";
import { pizzaBases, pizzaSauces, pizzaToppings, pizzaDeliveryMethods } from '../pizzaDB';

export default function(state = {}, action) {

	switch (action.type) {
		
		case ADD_BASE:	
			let base = pizzaBases.filter( base => base.id === action.payload.id )
			return [...state, base[0].price]
		
		case ADD_SAUCE:	
			let sauce = pizzaSauces.filter( sauce => sauce.id === action.payload.id )
			return [...state, sauce[0].price]

		case ADD_TOPPING:	
			let topping = pizzaToppings.filter( topping => topping.id === action.payload.id )
			return [...state, topping[0].price]

		case DELIVERY_METHOD:	
			let delivery = pizzaDeliveryMethods.filter( delivery => delivery.id === action.payload.id )
			return [...state, delivery[0].price]
		
		default:
			return state
	}
}


// let totalPrice = 0;
// let counter = 0;
// while (counter <= 3) {
//     totalPrice += topping[0].price
// }
