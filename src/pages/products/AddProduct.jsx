import React from 'react'

const AddProduct = () => {
  return (
    <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg p-6'>
        <h2 className='text-sl font-semibold text-gray-700 mb-4'>Add New Product</h2>

        <form>
            <div>
                <label className='block text-sm font-medium text-gray-600'>Product Name : </label>
                <input type='text' name='name' id='name' placeholder='Product 1' className='w-full bg-gray-50 text-black mt-1 
                p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600'/>
            </div>
        </form>
    </div>
  )
}

export default AddProduct