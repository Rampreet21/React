import React from 'react'
import { useState } from 'react';


const Counter = () => {

    let [count, setcount] = useState(0);
    function inc() {
        setcount(count + 1);
    }
    function dec() {
        setcount(count - 1);
    }

    return (

        <div style={{ margin: "20px", padding: "10px" }}>
            <button onClick={dec}>PREVIOUS</button>
            <span>{count}</span>
            <button onClick={inc}>NEXT</button>
        </div>


    )
}

export default Counter