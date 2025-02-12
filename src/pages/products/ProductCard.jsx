import React from 'react'

const ProductCard = ({product}) => {
    const {id, name, price, image, category, date} = product || {}
    console.log(product);
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard