import React, { useState } from "react";
import "./styles/App.css";
import ViewProductDetails from "./components/ViewProductDetails";
const products = require("./data/products.json");
const components = require("./data/components.json");

const App = () => {
  const [product, setProduct] = useState({});
  const [productDetails, setProductDetails] = useState(false);

  const showProductDetails = (prod) => {
    if (productDetails) {
      if (prod === product) {
        setProductDetails(!productDetails);
      } else {
        setProduct(prod);
        findAllRelationsByProd(prod);
      }
    } else {
      setProduct(prod);
      setProductDetails(!productDetails);
      findAllRelationsByProd(prod);
    }
  };

  const createProductButton = (prod) => {
    return (
      <button
        key={prod.name}
        id={prod.name}
        onClick={() => showProductDetails(prod)}
      >
        {prod.name}
      </button>
    );
  };

  const createComponentButton = (comp) => {
    return <button key={comp.name}>{comp.name}</button>;
  };

  const displayAllProducts = () => {
    return products.map((prod) => createProductButton(prod));
  };

  const displayAllComponents = () => {
    return components.map((comp) => createComponentButton(comp));
  };

  //Search using a product
  const findAllRelationsByProd = (prod) => {
    //set the background-color of the prod button to #61DAFB

    let comps = prod.components;
    for (let comp in comps) {
      // Find button with same name??
      //set background-color to #DB3B6F
    }
  };

  return (
    <div className="App">
      <h1>Main React App</h1>
      {productDetails ? <ViewProductDetails product={product} /> : null}

      {displayAllProducts()}
      <br />
      {displayAllComponents()}
      <p>Here is some filler text for later.</p>
    </div>
  );
};

export default App;
