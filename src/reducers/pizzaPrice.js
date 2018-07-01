
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
