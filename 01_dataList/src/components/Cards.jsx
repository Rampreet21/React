
const Cards = ({data}) => {
  return (
    <div style={{
        width: "230px",
        borderRadius:"20px",
        backgroundColor: "",
        margin: "0px 50px",
        textAlign:"center",
        lineHeight:"17px"
        // color:"white",
        
    }}>
        <img style={{width:"100%", height:"180px"}} src={data.thumbnail} alt="" />
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p><b>${data.price}</b></p>
    </div>
  )
}

export default Cards