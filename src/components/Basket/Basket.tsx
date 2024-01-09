import { useState } from "react";
import "./Basket.css";
import EmptyBasket from "./sub/EmptyBasket";

export default function Basket(){
const [isOrderListEmpty, setIsOrderListEmpty] = useState(true);

    return(
        <div className="flex direction-column basket">
            <p id="cart-header">Moje zamówienie</p>
            <div className="order-container">
                {
                    isOrderListEmpty 
                    ? <EmptyBasket/>
                    : <h1>lista produktów</h1>
                }
            </div>
            <div className={`flex justify-space-between align-center order-button ${isOrderListEmpty ? "inactive" : "active"}`}>
                <p className="order-button-text">Zamów</p>
                <p className="order-button-text">0.00zł</p>
            </div>
            
        </div>
    )
}