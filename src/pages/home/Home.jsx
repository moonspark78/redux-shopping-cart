import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from "../products/ProductCard"
import AddProduct from "../products/AddProduct"


const Home = () => {

    const products = useSelector((state) => state.products)

    



  return (
    <div className='py-8 max-w-7xl mx-auto px-4'>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
             <div>
                <AddProduct/>
            </div>

            <div className='col-span-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 justify-items-center'>
                    {
                        products.length ? products.map((product, index) => (
                            <ProductCard key={index} product={product}/>
                        )) : <div> No Product Found</div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home