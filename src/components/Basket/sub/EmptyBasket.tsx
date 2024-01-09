import "../Basket.css";

//assets
import cartIcon from "../../../assets/navbar/cartIcon.png"

export default function EmptyBasket(){
    return(
        <div className="flex direction-column justify-center align-center">
            <img id="empty-cart-image" src={cartIcon} alt="cart"/>
            <p id="empty-cart-text">Koszyk jest pusty</p>
        </div>
    )
}