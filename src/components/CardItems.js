import React from "react";
import CardItem from "./CardItem";
import "./CardItems.css";

function CardItems({ items }) {
  console.log("Inside items: ",items);
  return (
    <div className="CardItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CardItems-items">
        <CardItem />
      </div>
    </div>
  );
}

export default CardItems;
