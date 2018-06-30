
export const ADD_BASE = "ADD_BASE"
export const ADD_SAUCE = "ADD_SAUCE"
export const ADD_TOPPING = "ADD_TOPPING"
export const DELIVERY_METHOD = "DELIVERY_METHOD"

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

