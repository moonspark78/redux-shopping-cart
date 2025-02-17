import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
  }

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        
        //add To Cart
        //increase quantity
        //decrease quantity
        //remove from Cart
    },
})


export const {  } = cartSlice.actions
export default cartSlice.reducer