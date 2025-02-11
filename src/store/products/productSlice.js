import { createSlice } from '@reduxjs/toolkit'
import { data } from 'react-router';

const initialState = [{
    id: 1,
    name: 'Product 1',
    price: 50,
    image: "https://images.unsplash.com/photo-1736173155834-6cd98d8dc9fe?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    data: "02-02-2025"
}]



const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
}) 