import React from "react";

const ProductCard = ({ product }) => {
  const { id, name, price, image, category, date } = product || {};
  console.log(product);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-98">
        <img
          src={image}
          alt="Shoes"
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body bg-white">
        <h2 className="card-title">{name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim aliquam mauris.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
 };

export default ProductCard;
