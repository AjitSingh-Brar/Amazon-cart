import React from "react";
import "./CardTotal.css";

function CardTotal() {
  return <div className="CardTotal">
    <h3>Subtotal(5 items):
      <span className="CardTotal-price">
        $2,172.38
      </span>
    </h3>
    <button>
      Proceed to Checkout
    </button>
  </div>
}

export default CardTotal;
