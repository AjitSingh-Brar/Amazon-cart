import React from "react";
import "./CardTotal.css";
import NumberFormat from "react-number-format";

function CardTotal({ items }) {
  const getTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="CardTotal">
      <h3>
        Subtotal({items.length} items):
        <span className="CardTotal-price">
          <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale = {2}/>
        </span>
      </h3>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default CardTotal;
