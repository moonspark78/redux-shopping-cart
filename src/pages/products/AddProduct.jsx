import React from 'react'

const AddProduct = () => {
  return (
    <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg p-6'>
        <h2 className='text-sl font-semibold text-gray-700 mb-4'>Add New Product</h2>

        <form className='space-y-4'>

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


        </form>
    </div>
  )
}

export default AddProduct