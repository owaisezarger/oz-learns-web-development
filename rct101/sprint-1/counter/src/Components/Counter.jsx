import React, { useState } from "react";

const Counter = () =>{
    let [count, setCount]= useState(0);
    const handleIncrement = () =>{
        setCount(count+1);
    }
    const handleDecrement = () =>{
        setCount(count-1);
    }
    return(
        <div>
            <h1>Counter {count}</h1>
            <button onClick={handleIncrement} disabled={count===10}>Increment</button>
            <button onClick={handleDecrement} disabled={count===0}>Decrement</button>
        </div>
    )
}

export default Counter;