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
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
 };

export default ProductCard;
