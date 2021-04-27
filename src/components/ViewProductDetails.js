import React from "react";

const ViewProductDetails = ({ product }) => {
  const displayAllComponents = () => {
    return product.components.map((comp) => createComponent(comp));
  };

  const createComponent = (comp) => {
    return <h3>{comp.name}</h3>;
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      {displayAllComponents()}
    </div>
  );
};
export default ViewProductDetails;
