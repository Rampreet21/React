
const Cards = ({data}) => {
  return (
    <div style={{
        height:"250%",
        width: "230px",
        borderRadius:"20px",
        backgroundColor: "",
        padding: "10px",
        margin: "20px"
        // color:"white",
        
    }}>
        <img style={{width:"100%" }} src={data.thumbnail} alt="" />
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p> {data.discountPercentage}%</p>
        <p><b>${data.price}</b></p>
    </div>
  )
}

export default Cards