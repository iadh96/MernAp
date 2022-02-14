import React from "react";
import { useSelector } from "react-redux";
import Products from "./Products";



function Home() {

  const products = useSelector((state) => state.ProductReducer.products);

  return(
  <div>
    {
      products.map((el)=><Products el={el} key={el._id}/>)
    }
  </div>
  )}

export default Home