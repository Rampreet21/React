import React from 'react'

const Slider = ({ data }) => {

    return (
        <div style={{ padding:"20px 0"}}>

            <img id='img' style={{ width: "200px", margin:"0 90px", animation: "slideLeft 0.5s ease-out forwards", }} src={data.thumbnail} alt="" />
            <p style={{ textAlign:"center", fontSize: "15px", padding:""}}>  {data.title}</p>

        </div>
    )
}

export default Slider