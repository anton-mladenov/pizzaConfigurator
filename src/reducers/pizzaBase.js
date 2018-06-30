
import { ADD_BASE } from "../actions/pizzaActions";
import { pizzaBases } from '../pizzaDB';

export default function(state = {}, action) {

	switch (action.type) {
		
		case ADD_BASE:	
			let base = pizzaBases.filter( base => base.id === action.payload.id )
			return base[0]
		
		default:
			return state
	}
}
