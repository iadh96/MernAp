import React from "react";

function Products({ el }) {
  return (
    <div>
      <h1> {el.title} </h1>
      <img src={el.image} />
      <p>{el.description}</p>
    </div>
  );
}

export default Products;