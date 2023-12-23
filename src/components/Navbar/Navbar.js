import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//assets
import userIcon from "../../assets/navbar/userIcon.png";
import cartIcon from "../../assets/navbar/cartIcon.png";
import blankIcon from "../../assets/common/blankIcon.png";

//constants
import PAGES from "../../constants/PAGES";

export default function Navbar() {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function redirectToHomePage() {
        navigate(PAGES.HOME);
    }

    function redirectToLoginPage() {
        navigate(PAGES.LOGIN);
    }

    function redirectToOfferPage() {
        navigate(PAGES.OFFER);
    }

    return (
        <div className="navbar-grid">
            <div className="flex align-center navbar-left-section">
                <img className="navbar-logo" src={blankIcon} alt="logo" onClick={() => redirectToHomePage()} />
                <p className="navbar-logo-text" onClick={() => redirectToHomePage()}>Cookier's Pizza</p>
            </div>
            <div className="flex justify-end align-center navbar-right-section">
                <>
                    <div className="flex navbar-element">
                        {
                            windowWidth > 767
                            &&
                            <p className="navbar-element-text" onClick={() => redirectToLoginPage()}>Zaloguj się</p>
                        }
                        <img className="navbar-icon" src={userIcon} alt="user" onClick={() => redirectToLoginPage()} />
                    </div>
                    <div className="flex navbar-element">
                        {
                            windowWidth > 767
                            &&
                            <p className="navbar-element-text" onClick={() => redirectToOfferPage()}>Koszyk</p>
                        }
                        <img className="navbar-icon" src={cartIcon} alt="cart" onClick={() => redirectToOfferPage()} />
                    </div>
                </>
            </div>
        </div>
    )
}