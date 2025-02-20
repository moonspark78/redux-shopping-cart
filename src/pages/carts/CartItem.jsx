import React from 'react'

const CartItem = ({item}) => {
    const {id, name, price, image, category} = item || {};
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
                        <p className='text-sm text-gray-500'>{price}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem