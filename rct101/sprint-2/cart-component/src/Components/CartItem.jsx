import React, { useState } from "react";
import "./CartItem.css";

const CartItem = (props) => {
  const { name, price } = props;

  const [quantity, setQuantity] = useState(0);

  return (
    <div className="cart-item">
      <p>Name : {name} </p>
      <p>Price: {price}</p>
      <button
        disabled={quantity === 0}
        onClick={() => setQuantity(quantity - 1)}
      >
        -
      </button>
      <p className="cart-item-quantity">{quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <p className="cart-item-total">Total: {price * quantity}</p>
    </div>
  );
};

export default CartItem;
