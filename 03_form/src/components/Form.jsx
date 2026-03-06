import React from 'react'
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import '../style/Form.css'

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [showP, setShowP] = useState(false);


    function subhandle(e) {
        e.preventDefault();
        console.log({name,email,pass});
    }

    console.log
    return (

        <form className='form'>
            <h2>SIGN UP</h2>
            <label className='label' htmlFor="">NAME</label>
            <input onChange={(e) => {
                setName(e.target.value)
            }} className='inputbox' type="text" value={name} />
            <label className='label' htmlFor="">EMAIL</label>
            <input onChange={(e) => { setEmail(e.target.value) }} className='inputbox' type="text" value={email} />
            <label className='label' htmlFor="">PASSWORD</label>
            <div className='pdiv'>
            <input onChange={(e) => { setPass(e.target.value) }} className='inputbox' type= {showP? "text":"password"} />
            <button type='button' onClick={()=>{setShowP(!showP)}}>show</button>
            </div>
            <button onClick={subhandle}> SUBMIT</button>
        </form>
    )
}

export default Form