
import { SEND_PRICES } from "../actions/pizzaActions";

export default function(state = [], action) {

	switch (action.type) {
		
		case SEND_PRICES:
			let totalPrice = []
			if (action.basePrice) {
				totalPrice.push(action.basePrice)
			}
			if (action.saucePrice) {
				totalPrice.push(action.saucePrice)
			}
			if (action.toppingPrice) {
				totalPrice.push(action.toppingPrice)
			}

			let finalPrice = totalPrice.reduce((total, num) => { return total + num }, 0)

			if (action.deliveryPercent) {
				finalPrice = (finalPrice * action.deliveryPercent) + finalPrice
			}

			return parseFloat(finalPrice.toFixed(2))

		default:
			return state
	}
}

// 	var num = 5.56789;
//     var n = num.toFixed(2);

// function financial(x) {
//   return Number.parseFloat(x).toFixed(2);
// }

// console.log(financial(123.456));
// expected output: "123.46"

		// basePrice,
		// saucePrice,
		// toppingPrice,
		// deliveryPercent

		// case ADD_BASE:	
		// 	let base = pizzaBases.filter( base => base.id === action.payload.id )
		// 	return [...state, base[0].price]
		
		// case ADD_SAUCE:	
		// 	let sauce = pizzaSauces.filter( sauce => sauce.id === action.payload.id )
		// 	return [...state, sauce[0].price]

		// case ADD_TOPPING:	
		// 	let littleState = []
		// 	if (littleState.length <= 3) {
		// 		let topping = pizzaToppings.filter( topping => topping.id === action.payload.id )
		// 		littleState.push(topping[0].price)
		// 		console.log("from inside the price reducer: " + littleState.length)
		// 		return [...state, littleState.reduce(function(total, num){ return total + num } , 0)]
		// 	} else {
		// 		return state
		// 	}

		// case DELIVERY_METHOD:	
		// 	let delivery = pizzaDeliveryMethods.filter( delivery => delivery.id === action.payload.id )
		// 	return [...state, delivery[0].price]

// var sum = [1, 2, 3].reduce(function(total, num){ return total + num } , 0);

// let totalPrice = 0;
// let counter = 0;
// while (counter <= 3) {
//     totalPrice += topping[0].price
// }

	// 		let counter = 0
	// 		// let topping = []
	// 		let priceTopping = 0
	// 		while (counter <= 3) {
	// 			let topping = pizzaToppings.filter( topping => topping.id === action.payload.id )
	// 			priceTopping += topping[0]
	// 			counter += 1
	// 		}
	// 		return [...state, topping.price]

	// if (state.length < 3) {
	// 			let topping = pizzaToppings.filter( topping => topping.id === action.payload.id )
	// 			return [...state, topping[0]]
	// 		} else {
	// 			return state
	// 		}


