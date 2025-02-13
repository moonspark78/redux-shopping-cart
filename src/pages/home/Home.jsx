import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from "../products/ProductCard"


const Home = () => {

    const products = useSelector((state) => state.products)

    



  return (
    <div className='py-8 max-w-7xl mx-auto px-4'>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
            <div className='col-span-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    {
                        products.length ? products.map((product, index) => (
                            <ProductCard key={index} product={product}/>
                        )) : <div> No Product Found</div>
                    }
                </div>
            </div>
            <div>Add New Products</div>
        </div>
    </div>
  )
}

export default Home