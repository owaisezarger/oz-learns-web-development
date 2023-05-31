import React, { useEffect, useState } from "react";
import "./CartItem.css";

const CartItem = (props) => {
  const { name, price, addTotalPrice, subtractTotalPrice } = props;

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    addTotalPrice(price, quantity);
    return () => {
      subtractTotalPrice(price, quantity);
    };
    // eslint-disable-next-line
  }, [quantity]);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="cart-item">
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <button onClick={handleDecrease}>-</button>
      <p className="cart-item-quantity">{quantity}</p>
      <button onClick={handleIncrease}>+</button>
      {/* <p className="cart-item-total">Total: ${(price * quantity).toFixed(2)}</p> */}
    </div>
  );
};

export default CartItem;
