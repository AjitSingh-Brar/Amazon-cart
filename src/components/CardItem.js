import React from 'react'
import "./CardItem.css"
function CardItem() {
    return (
        <div className="CardItem">
            <div className="CardItem-image">
                <img src="https://multimedia.bbycastatic.ca/multimedia/products/500x500/149/14961/14961856.jpg" alt=""/>
            </div>
            <div className="CardItem-info">
                <div className="info-title">
                    <h2>Apple Ipad Pro</h2>
                </div>
                <div className="info-stock">In Stock</div>
                <div className="item-actions">
                    <div className="item-quantity">
                        <select>
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
                $250.00
            </div>
        </div>
    )
}

export default CardItem
