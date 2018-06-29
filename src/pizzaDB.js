
// Pizza Bases Options

export const base20 = {
	name: "NY Style",
	size: 20,
	price: 6.45,
}

export const base25 = {
	name: "NY Style",
	size: 25,
	price: 8.99,
}

export const base30 = {
	name: "NY Style",
	size: 30,
	price: 11.49,
}

export const base35 = {
	name: "NY Style",
	size: 35,
	price: 13.49,
}

// Pizza Sauce Options

export const sauceWhite = {
	name: "White Sauce",
	price: 0
}

export const sauceRed = {
	name: "Red Sauce",
	price: 0
}

export const sauceRedDouble = {
	name: "Double Red Sauce",
	price: 1
}

export const sauceMixed = {
	name: "Mixed Sauce",
	price: 1.5
}

// Pizza Extra Options

export const pineapple = {
	name: "Pineapple",
	price: 0.5
}

export const corn = {
	name: "Corn",
	price: 0.5
}

export const greenOlives = {
	name: "Green Olives",
	price: 0.5
}

export const redOnion = {
	name: "Red Onion",
	price: 0.5
}

export const spinach = {
	name: "Spinach",
	price: 0.5
}

export const cherryTomatoes = {
	name: "Cherry Tomatoes",
	price: 0.5
}

export const chicken = {
	name: "Chicken",
	price: 0.5
}

// Pizza Delivery Options

export const deliveryCost = (deliveryMethod, pizzaTotalPrice) => {
	if (deliveryMethod === "Turbo Drone Delivery") {
		const finalPrice = (pizzaTotalPrice * 0.1) + pizzaTotalPrice
		return finalPrice
	} else {
		return pizzaTotalPrice
	}
}

// const initialState = {
// 	base: base25,
// 	sause: [sauceRed],
// 	topping: [redOnion, greenOlives]
// }
// console.log(initialState);