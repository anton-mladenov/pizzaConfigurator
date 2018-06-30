
import { DELIVERY_METHOD } from "../actions/pizzaActions";
import { pizzaDeliveryMethods } from '../pizzaDB';

export default function(state = {}, action) {

	switch (action.type) {
		
		case DELIVERY_METHOD:	
			let delivery = pizzaDeliveryMethods.filter( delivery => delivery.id === action.payload.id )
			return delivery[0]
		
		default:
			return state
	}
}
