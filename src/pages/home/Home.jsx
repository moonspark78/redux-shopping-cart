import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {

    const products = useSelector((state) => state.products)
    console.log(products);
    



  return (
    <div className='py-8 max-w-7xl mx-auto px-4'>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
            <div className='col-span-2'>Display Products</div>
            <div>Add New Products</div>
        </div>
    </div>
  )
}

export default Home