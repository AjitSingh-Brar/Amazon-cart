import React from "react";
import CardItem from "./CardItem";
import "./CardItems.css";

function CardItems({ items, setCartItems }) {
  const changeItemQuantity = (event, index) => {
    // when we click on item, we pass it in here
    // Pass in index
    // using index to change the quantity to the selected one from the selected option
    //update the items state

    const newItems = [...items];
    items[index].quantity = event.target.value;
    setCartItems(newItems);
  };
  return (
    <div className="CardItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CardItems-items">
        {items.map((item, index) => (
          <CardItem
            index={index}
            item={item}
            key={index}
            changeItemQuantity={changeItemQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default CardItems;
