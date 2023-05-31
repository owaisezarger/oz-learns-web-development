import React, { useState } from "react";
import "./App.css";
import CartItem from "./Components/CartItem";

function App() {
  const items = [
    { name: "Item 1", price: 10.99 },
    { name: "Item 2", price: 5.99 },
    { name: "Item 3", price: 7.99 },
    { name: "Item 4", price: 12.99 },
  ];

  const [total, setTotal] = useState(0);

  const addTotalPrice = (price, quantity) => {
    setTotal((prevTotal) => prevTotal + price * quantity);
  };

  const subtractTotalPrice = (price, quantity) => {
    setTotal((prevTotal) => prevTotal - price * quantity);
  };

  return (
    <div className="App">
      <h1>Cart Component</h1>
      {items.map((item, i) => (
        <CartItem
          key={i}
          name={item.name}
          addTotalPrice={addTotalPrice}
          subtractTotalPrice={subtractTotalPrice}
          price={item.price}
        />
      ))}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default App;
