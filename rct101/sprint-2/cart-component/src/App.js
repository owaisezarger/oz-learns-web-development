import React from "react";
import "./App.css";
import CartItem from "./Components/CartItem";

function App() {
  const items = [
    { name: "Item 1", price: 10.99 },
    { name: "Item 2", price: 5.99 },
    { name: "Item 3", price: 7.99 },
    { name: "Item 4", price: 12.99 },
  ];

  return (
    <div className="App">
      <h1>Cart Component</h1>
      {items.map((item, i) => (
        <CartItem key={i} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default App;
