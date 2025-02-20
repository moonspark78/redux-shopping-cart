import React from 'react'

const CartItem = ({item}) => {
    const {id, name, price, image, category} = item || {};
  return (
    <div>
        <div className='rounded-lg'>
            <div className='sm:flex sm:justify-start shadow-md p-6 bg-white rounded-lg mb-6 justify-between'>
                {/* product image */}
                <img src={image} alt='' className='w-full h-28 sm:w-40 object-cover rounded'/>
            </div>
        </div>
    </div>
  )
}

export default CartItem