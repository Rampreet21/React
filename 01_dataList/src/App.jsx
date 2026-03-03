import "./App.css";
import products from "./data.js";
import Cards from "./components/Cards.jsx";

function App() {
  let product = [];

  for (let i = 0; i < products.length; i++) {
    product.push(<Cards data={products[i]} />);
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

export default App;
