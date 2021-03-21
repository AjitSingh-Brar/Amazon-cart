import React from "react";
import CardItem from "./CardItem";
import "./CardItems.css";

function CardItems() {
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
