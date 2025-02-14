import { createSlice } from '@reduxjs/toolkit'


const initialState = [
    {
        id: 1,
        name: 'Product 1',
        price: 50,
        category: 'Electronics',
        image: "https://images.unsplash.com/photo-1736173155834-6cd98d8dc9fe?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        data: "02-02-2025"
    },
    {
        id: 2,
        name: 'Product 2',
        price: 54,
        category: 'Electronics',
        image: "https://images.unsplash.com/photo-1574858818846-886b8380713b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2lzZWF1eHxlbnwwfHwwfHx8MA%3D%3D",
        data: "05-02-2025"
    }
]



const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.push({
                id: state.length > 0 ? state[state.length - 1].id: 1,
                ...action.payload
            })
        }
    }
}) 

export const { addProduct } = productSlice.actions
export default productSlice.reducer