import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Items = () => {

  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => setProducts(data));
  }, []);

  const data = products.find((ele) => ele.id == id);

  if (!data) {
    return <div className="spinnercenter"> <div className="spinner"></div> <h3 className='loader mt-2'>Loading...</h3></div>;
  }

  return (
    <div style={{ border: "1px solid black", width: "800px", margin: "auto", marginTop: "20px", padding: "20px" }}>
      <img src={data.image} alt={data.title} width="200" />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
    </div>
  );
};

export default Items;