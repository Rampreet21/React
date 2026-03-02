import Cards from "./Components/Cards.jsx";
import products from "./data.js";
import Counter from "./Components/Counter.jsx";
import Slider from "./Components/Slider.jsx";
import { useState } from "react";

function App() {
  let [PN, setPN] = useState(0);

  function inc() {
    if (PN != 24) {
      if (PN >= 0) {
        setPN(PN + 1);
      }
    }
  }

  function dec() {
    if (PN != 0) {
      if (PN <= 24) {
        setPN(PN - 1);
      }
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "auto 40px",
          transition: "0.5s ease"
        }}
      >
        <Slider data={products[PN + 0]} />
        <Slider data={products[PN + 1]} />
        <Slider data={products[PN + 2]} />
        <Slider data={products[PN + 3]} />
        <Slider data={products[PN + 4]} />
        <Slider data={products[PN + 5]} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <button className="btn btn-outline-primary btn-lg mx-5" onClick={dec}>
          PREVIOUS
        </button>

        <button
          className="btn btnn btn-outline-primary btn-lg mx-5"
          onClick={inc}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default App;
