import React from 'react'
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import '../style/Form.css'

const Form = () => {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [pass, setPass] = useState("");
    const [showP, setShowP] = useState(false);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const set = (e) => {
        (setData({ ...data, [e.target.name]: e.target.value }));
    }

    function subhandle(e) {
        e.preventDefault();
        console.log(data);
    }

    console.log
    return (

        <form className='form'>
            <h2>SIGN UP</h2>
            <label className='label' htmlFor="">NAME</label>
            <input name='name' onChange={set} className='inputbox' type="text" value={data.name} />
            <label className='label' htmlFor="">EMAIL</label>
            <input name='email' onChange={set} className='inputbox' type="text" value={data.email} />
            <label className='label' htmlFor="">PASSWORD</label>
            <div className='pdiv'>
                <input name='password' onChange={set} className='inputbox' type={showP ? "text" : "password"} value={data.password} />
                <button type='button' onClick={() => { setShowP(!showP) }}>show</button>
            </div>
            <button onClick={subhandle}> SUBMIT</button>
        </form>
    )
}

export default Form