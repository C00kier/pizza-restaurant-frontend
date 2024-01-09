import "./Offer.css";

//components
import Basket from "../../components/Basket/Basket";
import OfferSection from "../../components/OfferSection/OfferSection";

export default function OfferPage() {
    return (
        <>
            <div className="grid offer-page-div">
                <div className="flex direction-column offers-div">
                    <OfferSection />
                </div>
                <div className="basket-div">
                    <Basket />
                </div>
            </div>
        </>
    )
}