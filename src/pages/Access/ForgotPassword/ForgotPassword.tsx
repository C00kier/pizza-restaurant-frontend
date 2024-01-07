import { useNavigate } from "react-router-dom";
import ".././Access.css";

//constants
import PAGES from "../../../constants/PAGES";

export default function ForgotPassword() {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex direction-column justify-center access-container forgot-password-div">
                <h2>Przypomnij hasło</h2>
                <form className="flex direction-column align-self-center access-form">
                    <input
                        className="access-input"
                        type="email"
                        name="email"
                        placeholder="Adres E-mail"
                        autoComplete="signing-email" />
                    <button
                        className="align-self-center access-button"
                        type="submit">
                        Wyślij
                    </button>
                    <p>
                        <span className="access-link" onClick={(): void => navigate(PAGES.LOGIN)}>Logowanie</span>
                    </p>
                </form>
            </div>
        </>
    )
}