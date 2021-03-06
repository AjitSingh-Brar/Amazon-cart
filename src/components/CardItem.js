import React, { useState } from "react";

import "./CardItem.css";
function CardItem({ item, index, changeItemQuantity, deleteItem }) {
  return (
    <div className="CardItem">
      <div className="CardItem-image">
        <img src={process.env.PUBLIC_URL + `/items/${item.image}`} alt="" />
      </div>
      <div className="CardItem-info">
        <div className="info-title">
          <h2>{item.title}</h2>
        </div>
        <div className="info-stock">{item.stock}</div>
        <div className="item-actions">
          <div className="item-quantity">
            <select value={item.quantity} onChange={(e)=>changeItemQuantity(e, index)}>
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
              <option value="6">Qty: 6</option>
            </select>
          </div>
          <div className="item-actions-divider">|</div>
          <div className="item-delete" onClick={(e)=> deleteItem(e, index)}>Delete</div>
        </div>
      </div>
      <div className="CardItem-price">${item.price}</div>
    </div>
  );
}

export default CardItem;
