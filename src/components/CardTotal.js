import React from "react";
import "./CardTotal.css";

function CardTotal({items}) {

  const getTotalPrice = ()=>{
    let total = 0;
    items.map((item)=>{
      total = total  +  (item.price * item.quantity);
    })
    return total.toFixed(2);
  }

  return <div className="CardTotal">
    <h3>Subtotal({items.length} items):
      <span className="CardTotal-price">
        ${getTotalPrice()}
      </span>
    </h3>
    <button>
      Proceed to Checkout
    </button>
  </div>
}

export default CardTotal;
