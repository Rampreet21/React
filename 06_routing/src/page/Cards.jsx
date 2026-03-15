import React from 'react'
import { Link } from 'react-router-dom'

const Items = ({data}) => {
  return (
    <div style={{

        width: "250px",
        borderRadius:"20px",
        backgroundColor: "",
        margin: "0px 50px",
        textAlign:"center",
        lineHeight:"17px",
        fontSize:"14px",
        padding:"10px",
        // color:"white",
        
    }}>
        <Link to={'/products/'+ data.id} style={{textDecoration:"none", color:"black"}}>
            <img style={{width:"70%", height:"180px"}} src={data.image} alt="" />
            <h5>{data.title}</h5>
            {/* <p className='mb-1'>{data.description}</p> */}
            <p className='text-success mt-0'><b>${data.price}</b></p>
        </Link>
    </div>
  )
}

export default Items