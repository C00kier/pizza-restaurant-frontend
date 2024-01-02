import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Access.css";

//constants
import PAGES from "../../../constants/PAGES";

export default function LoginPage() {
    const navigate = useNavigate();
    const [loginCredentials, setLoginCredentials] = useState({
        email: "",
        password: ""
    })

    function emailInputOnChangeEvent(e) {
        setLoginCredentials(Object.assign(loginCredentials, { email: e.target.value }));
    }

    function passwordInputOnChangeEvent(e) {
        setLoginCredentials(Object.assign(loginCredentials, { password: e.target.value }));
    }

    function redirectToRegister() {
        navigate(PAGES.REGISTER);
    }

    function redirectToForgotPassword() {
        navigate(PAGES.FORGOT_PASSWORD);
    }

    return (
        <div className="flex direction-column justify-center access-container">
            <h1>Logowanie</h1>
            <form className="flex direction-column align-self-center access-form">
                <div className="access-field-div">
                    <input
                        className="access-input"
                        type="email"
                        name="email"
                        placeholder="Adres E-mail"
                        autoComplete="signing-email"
                        onChange={(e) => emailInputOnChangeEvent(e)} />
                </div>
                <div className="access-field-div">
                    <input
                        className="access-input"
                        type="password"
                        name="password"
                        placeholder="Hasło"
                        autoComplete="signing-password"
                        onChange={(e) => passwordInputOnChangeEvent(e)} />
                </div>
                <button className="align-self-center access-button" type="submit">Zaloguj</button>
                <p>
                    Nie masz konta? <span className="access-link" onClick={() => redirectToRegister()}>Zarejestruj się</span>
                </p>
                <p>
                    <span className="access-link" onClick={() => redirectToForgotPassword()}>Nie pamiętasz hasła?</span>
                </p>
            </form>

        </div>
    )
}