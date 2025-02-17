import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
  }

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        
        //add To Cart
        addToCart: (state, action) => {
            const existingProduct = state.find((product) => product.productId === action.payload.id)
            if (existingProduct) {
                alert('Product already in cart')
            } else {
                state.push({id: Date.now(), ...action.payload, quantity: 1 })
            }
        }


        //increase quantity
        //decrease quantity
        //remove from Cart
    },
})


export const {  } = cartSlice.actions
export default cartSlice.reducer