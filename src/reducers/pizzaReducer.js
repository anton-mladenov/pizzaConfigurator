// const pizza = { 		// the imaginary state of the whole pizza as an object
	// 	base: X,
	// 	sauce: [Y, Z],
	// 	topping: [A, B, C]
// }

import { ADD_BASE, ADD_SAUSE, ADD_TOPPING, DELIVERY_METHOD } from "../actions/pizzaActions";
import * as pizzaIngredients from '../pizzaDB';

const initialState = [
	{ 
		base: [pizzaIngredients.base25.name],
		sause: [pizzaIngredients.sauceRed],
		topping: [pizzaIngredients.redOnion, pizzaIngredients.greenOlives]
	},
	pizzaIngredients.base25.price
]
// console.log(initialState);
// 
//  base: { name: 'NY Style', size: 25, price: 8.99 },
//   sause: [ { name: 'Red Sauce', price: 0 } ],
//   topping: 
//    [ { name: 'Red Onion', price: 0.5 },
//      { name: 'Green Olives', price: 0.5 } ] }

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BASE:
      return 
    case ADD_SAUSE:
      return 
	case ADD_TOPPING:
      return 
	case DELIVERY_METHOD:
      return 
    default:
      return state
  }
}
