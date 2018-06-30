
import { ADD_TOPPING } from "../actions/pizzaActions";
import { pizzaToppings } from '../pizzaDB';

export default function(state = [], action) {

	switch (action.type) {

		case ADD_TOPPING:	
			
			if (state.length < 3) {
				let topping = pizzaToppings.filter( topping => topping.id === action.payload.id )
				return [...state, topping[0]]
			} else {
				return state
			}
		
		default:
			return state
	}
}

