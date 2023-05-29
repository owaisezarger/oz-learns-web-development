import React, { useState } from "react";

const InputBox = () =>{
    const [text, setText] = useState("");
console.log(text);

    const handleChange = (e) =>{
        setText(e.target.value)
    }
    const handleClear = () => {
        setText("");
    }
    return(
            <div>
                <input type="text" value={text} onChange={handleChange}/>
                <h2>{text}</h2>
                <button onClick={handleClear}>Clear input</button>
            </div>
        )
}

export default InputBox;