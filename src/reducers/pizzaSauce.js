
import { ADD_SAUCE } from "../actions/pizzaActions";
import { pizzaSauces } from '../pizzaDB';

export default function(state = {}, action) {

	switch (action.type) {
		
		case ADD_SAUCE:	
			let sauce = pizzaSauces.filter( sauce => sauce.id === action.payload.id )
			return sauce[0]
		
		default:
			return state
	}
}
