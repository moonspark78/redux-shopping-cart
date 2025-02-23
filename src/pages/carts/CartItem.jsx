import React from 'react'
import { ImCross } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { increaseQuantity } from "../../store/carts/cartSlice";
import { decreaseQuantity } from "../../store/carts/cartSlice";
import { removeFromCart } from "../../store/carts/cartSlice";


const CartItem = ({item}) => {
    const {id, name, price, image, category, quantity} = item || {};
    const dispatch = useDispatch();

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(id))
    };

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity(id))
    };

    const handleRemoveProduct = () => {
        dispatch(removeFromCart(id))
    };



  return (
    <div>
        <div className='rounded-lg'>
            <div className='sm:flex sm:justify-start items-center shadow-md p-6 bg-white rounded-lg mb-6 justify-between'>
                {/* product image */}
                <img src={image} alt='' className='w-full h-28 sm:w-40 object-cover rounded'/>

                <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>

                    {/* product details */}
                    <div>
                        <h3 className='text-lg font-bold text-gray-900'>{name}</h3>
                        <p className='text-sm text-gray-500'>Price: {price}</p>
                        <p className='text-sm text-gray-600'>Category: {category}</p>
                    </div>

                    {/*  */}
                    <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                        <div className='flex items-center border-gray-100'>
                            <span onClick={handleDecreaseQuantity} className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100
                            hover:bg-blue-500 hover:text-white'>-</span>
                            <input type='number' value={quantity} className='size-8 border bg-white text-center
                            text-xs outline-none' readOnly/>
                            <span onClick={handleIncreaseQuantity} className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100
                            hover:bg-blue-500 hover:text-white'>+</span>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <p>${(price*quantity).toFixed(2)}</p>
                            <button onClick={handleRemoveProduct} className="text-red-500 cursor-pointer active:opacity-90" >
                                <ImCross />
                            </button>
                        </div>
                    </div>

                    


                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem