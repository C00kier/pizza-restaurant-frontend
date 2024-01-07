import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Access.css";

//constants
import PAGES from "../../../constants/PAGES";

//assets
import eye_open from "../../../assets/register/eye_open.png";
import eye_close from "../../../assets/register/eye_close.png";


export default function RegisterPage() {
    const navigate = useNavigate();
    const [registerCredentials, setRegisterCredentials] = useState({
        email: "",
        password: ""
    })
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function emailInputOnChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
        const targetValue = e.target.value;
        setRegisterCredentials(Object.assign(registerCredentials, { email: targetValue }));

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (targetValue.match(regex)) {
            setIsEmailValid(true);
            return;
        }
        setIsEmailValid(false);
    }

    function passwordInputOnChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
        const targetValue = e.target.value;
        setRegisterCredentials(Object.assign(registerCredentials, { password: e.target.value }));

        const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[A-Za-z0-9!@#$%^&*()-_+=]{8,16}$/;
        if (targetValue.match(regex)) {
            setIsPasswordValid(true);
            return;
        }
        setIsPasswordValid(false);
    }

    return (
        <div className="flex direction-column justify-center access-container">
            <h2>Załóż nowe konto</h2>
            <form className="flex direction-column align-self-center access-form">
                <div>
                    <input
                        className="access-input"
                        type="email"
                        name="email"
                        placeholder="Adres E-mail"
                        autoComplete="signing-email"
                        onChange={(e) => emailInputOnChangeEvent(e)} />
                    <p
                        className={isEmailValid
                            ? "access-credentials-valid"
                            : "access-credentials-invalid"}>
                        * Wprowadź poprawny adres e-mail
                    </p>
                </div>
                <div id="register-password-div">
                    <input
                        className="access-input"
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        placeholder="Hasło"
                        autoComplete="signing-password"
                        onChange={(e) => passwordInputOnChangeEvent(e)} />
                    <p
                        className={isPasswordValid
                            ? "access-credentials-valid"
                            : "access-credentials-invalid"}>
                        * Hasło musi zawierać 8-16 znaków
                    </p>
                    <p
                        className={isPasswordValid
                            ? "access-credentials-valid"
                            : "access-credentials-invalid"}>
                        znak specjalny, cyfrę i wielką literę
                    </p>
                    <img
                        id="eye_icon"
                        src={isPasswordVisible ? eye_open : eye_close}
                        alt="eye"
                        onClick={(): void => setIsPasswordVisible(!isPasswordVisible)} />
                </div>

                <button
                    className="align-self-center access-button"
                    type="submit">
                    Zarejestruj
                </button>
                <p>
                    Masz konto? <span className="access-link" onClick={(): void => navigate(PAGES.LOGIN)}>Zaloguj się</span>
                </p>
            </form>
        </div>
    )
}