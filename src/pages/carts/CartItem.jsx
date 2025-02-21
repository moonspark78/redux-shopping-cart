import React from 'react'

const CartItem = ({item}) => {
    const {id, name, price, image, category, quantity} = item || {};
  return (
    <div>
        <div className='rounded-lg'>
            <div className='sm:flex sm:justify-start shadow-md p-6 bg-white rounded-lg mb-6 justify-between'>
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
                    <div>
                        <div>
                            <span className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100
                            hover:bg-blue-500 hover:text-white'>-</span>
                            <input type='number' value={quantity} className='size-8 border bg-white text-center
                            text-xs outline-none' readOnly/>
                            <span className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100
                            hover:bg-blue-500 hover:text-white'>+</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem