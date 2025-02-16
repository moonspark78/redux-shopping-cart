import React from 'react'
import { useForm } from "react-hook-form"

const AddProduct = () => {

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)



  return (
    <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg p-6'>
        <h2 className='text-sl font-semibold text-gray-700 mb-4'>Add New Product</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>

            {/* Name */}
            <div>
                <label className='block text-sm font-medium text-gray-600'>Product Name : </label>
                <input type='text' name='name' id='name' placeholder='Product 1' className='w-full bg-gray-50 text-black mt-1 
                p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600'/>
            </div>

            {/* Category */}
            <div>
                <label className='block text-sm font-medium text-gray-600'>Category Name : </label>
                <select name='category' id='category' className='w-full bg-gray-50 text-black mt-1 
                p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600'>
                    <option value=''>Select a Category</option>
                    <option value='clothing'>Clothing</option>
                    <option value='gadgets'>Gadgets</option>
                    <option value='beauty'>Beauty</option>
                </select>
            </div>


            {/* Product Image Url */}
            <div>
                <label className='block text-sm font-medium text-gray-600'>Product URL : </label>
                <input type='text' name='image' id='image' placeholder='paste your url' className='w-full bg-gray-50 text-black mt-1 
                p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600'/>
            </div>


            {/* Price & Date */}
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <label className='block text-sm font-medium text-gray-600'>Price : </label>
                    <input type='number' name='price' id='price' placeholder='$100' className='w-full bg-gray-50 text-black mt-1 
                p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600'/>
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-600'>Upload Date : </label>
                    <input type='date' name='date' id='date' className='w-full bg-gray-50 text-black mt-1 
                p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600'/>
                </div>
            </div>

            <button type='submit' className="btn btn-primary w-full text-white py-2.5 px-4 rounded-lg">Add Product</button>

        </form>
    </div>
  )
}

export default AddProduct