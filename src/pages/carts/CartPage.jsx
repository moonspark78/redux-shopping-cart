import React from 'react'
import { useSelector } from 'react-redux';

const CartPage = () => {
    const carts= useSelector(state => state.carts)
  return (
    <div className='py-12 max-w-7xl mx-auto container px-4'>
        <h2 className='text-xl font-bold mb-5'>Shopping Cart</h2>

        <div className='flex flex-col md:flex-row justify-between md:gap-8 gap-4'>
            <div>Cart Items</div>
            <div>Billing Page</div>
        </div>
    </div>
  )
}

export default CartPage