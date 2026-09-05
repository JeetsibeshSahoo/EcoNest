import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items : []
};

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state, action) => {
            const product = action.payload.product
            const quantity = action.payload.quantity

            const existingItem = state.items.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                existingItem.quantity += quantity
                return
            }

            state.items.push({
                id : product.id,
                name: product.name,
                slug: product.slug,
                price: product.price,
                image: product.image,
                quantity,
            });
        },

        increaseQuantity : (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload
            );

            if (item) {
                item.quantity += 1
            }
        },

        decreaseQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload
            )

            if (item) {
                item.quantity -= 1
            }

            state.items = state.items.filter(
                (item) => item.quantity > 0
            )
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
        },

        clearCart: (state) => {
            state.items = []
        },
    }
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer