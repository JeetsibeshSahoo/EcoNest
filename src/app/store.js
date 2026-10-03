import { configureStore } from "@reduxjs/toolkit"

import cartReducer, {
  CART_STORAGE_KEY,
} from "../features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

const persistCart = () => {
  try {
    const cartItems = store.getState().cart.items

    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cartItems)
    )
  } catch (error) {
    console.error(
      "Failed to save cart to localStorage:",
      error
    )
  }
}

store.subscribe(persistCart)