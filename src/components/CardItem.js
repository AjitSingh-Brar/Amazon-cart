import React, { useState } from 'react'
import "./CardItem.css"
function CardItem({item}) {

    const [cartItem, setCartItem] = useState(item);
    return (
        <div className="CardItem">
            <div className="CardItem-image">
                <img src={process.env.PUBLIC_URL + `/items/${cartItem.image}`} alt=""/>
            </div>
            <div className="CardItem-info">
                <div className="info-title">
                    <h2>{cartItem.title}</h2>
                </div>
                <div className="info-stock">{cartItem.stock}</div>
                <div className="item-actions">
                    <div className="item-quantity">
                        <select value = {cartItem.quantity}>
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                        </select>
                    </div>
                    <div className="item-actions-divider">|</div>
                    <div className="item-delete">
                        Delete
                    </div>
                </div>
            </div>
            <div className="CardItem-price">
               ${cartItem.price}
            </div>
        </div>
    )
}

export default CardItem
