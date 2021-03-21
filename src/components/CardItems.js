import React from "react";
import CardItem from "./CardItem";
import "./CardItems.css";

function CardItems({ items }) {
  return (
    <div className="CardItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CardItems-items">
        {items.map((item, index) => 
          <CardItem item = {item} key={index}/>
        )}
      </div>
    </div>
  );
}

export default CardItems;
