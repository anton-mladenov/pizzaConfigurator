
export const ADD_BASE = "ADD_BASE"
export const ADD_SAUCE = "ADD_SAUCE"
export const ADD_TOPPING = "ADD_TOPPING"
export const DELIVERY_METHOD = "DELIVERY_METHOD"

export const SEND_PRICES = "SEND_PRICES"

export function addBase(id, price) {
	return {
		type: 'ADD_BASE',
		payload: { id, price }
	}
}

export function addSauce(id, price) {
	return {
		type: 'ADD_SAUCE',
		payload: { id, price }
	}
}

export function addTopping(id, price) {
	return {
		type: 'ADD_TOPPING',
		payload: { id, price }
	}
}

export function delivery(id, price) {
	return {
		type: 'DELIVERY_METHOD',
		payload: { id, price }
	}
}

export const calcPrice = () => (dispatch, getState) => {
	const state = getState()

	const basePrice = state.pizzaBase.price
	const saucePrice = state.pizzaSauce.price
	const toppingPrice = state.pizzaTopping
		.map(top => top.price)
		.reduce((total, num) => { return total + num } , 0)

	const deliveryPercent = state.pizzaDelivery.percentageOfBill

	dispatch({
		type: SEND_PRICES,
		basePrice,
		saucePrice,
		toppingPrice,
		deliveryPercent
	})

}
