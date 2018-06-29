export const ADD_BASE = "ADD_BASE"
export const ADD_SAUSE = "ADD_SAUSE"
export const ADD_TOPPING = "ADD_TOPPING"
export const DELIVERY_METHOD = "DELIVERY_METHOD"

export function addBase(base) {
  return {
    type: 'ADD_BASE',
    payload: base
  }
}

export function addSause(sauce) {
  return {
    type: 'ADD_SAUSE',
    payload: sauce
  }
}

export function addTopping(topping) {
  return {
    type: 'ADD_TOPPING',
    payload: topping
  }
}

export function delivery(method) {
  return {
    type: 'DELIVERY_METHOD',
    payload: method
  }
}
