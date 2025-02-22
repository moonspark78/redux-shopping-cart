import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'carts',
    initialState: [],
    reducers: {
        
        //add To Cart
        addToCart: (state, action) => {
            const existingProduct = state.find((product) => product.productId === action.payload.id)
            if (existingProduct) {
                alert('Product already in cart')
            } else {
                state.push({id: Date.now(), ...action.payload, productId: action.payload.id, quantity: 1 })
            }
        },

        //increase quantity
        increaseQuantity: (state, action) => {
            const product = state.find((product) => product.id === action.payload)
            if (product) {
                product.quantity++
            }
        },

        //decrease quantity
        decreaseQuantity: (state, action) => {
            const product = state.find((product) => product.id === action.payload)
            if (product && product.quantity > 1) {
                product.quantity--
            }
        },

        //remove from Cart
        removeFromCart:(state, action) =>{
            return state.filter((product) => product.id !== action.payload)
        }
    },
})


export const { addToCart, increaseQuantity , decreaseQuantity, removeFromCart } = cartSlice.actions
export default cartSlice.reducer