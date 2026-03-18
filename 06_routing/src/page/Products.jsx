import React, { use, useState } from 'react'
import Cards from './Cards.jsx';
import { data } from 'react-router-dom';

const Products = () => {

  const [products, setProducts] = useState([]);

  useState(() => {

  fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => setProducts(data.products));
  }, []);
  // console.log(products);
  
  if (products.length === 0) {
    return <div className="spinnercenter"> <div className="spinner"></div> <h3 className='loader mt-2'>Loading...</h3></div>;
  }



  let product = [];

  for (let i = 0; i < products.length; i++) {
    product.push(<Cards key={i} data={products[i]} />);
  }

  return (
    <>

      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        {
          product

        }
      </div>
    </>
  )
}

export default Products