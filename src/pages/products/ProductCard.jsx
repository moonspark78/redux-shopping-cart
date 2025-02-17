import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/carts/cartSlice";

const ProductCard = ({ product }) => {
  const { id, name, price, image, category, date } = product || {};
  console.log(product);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }

  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure className="h-80">
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
        <p className="font-bold text-lg">${price}</p>
          <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
 };

export default ProductCard;
