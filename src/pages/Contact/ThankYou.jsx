import {BasicButton} from "../../components/Buttons/BasicButton.jsx";
import NavBar from "../../components/NavBars/FancyNav/NavBar.jsx";
import "./ThankYou.scss"
import {useNavigate} from "react-router-dom";

export function ThankYou() {

    const nav = useNavigate()
    const handleHomeClick = () => {
        nav("/");
    }

    return (
        <>
            <NavBar/>
            <div className="contact-thankyou">
                <div className="contact-thankyou-content">
                    <h2 className="thankyou-content-header">Thank you!</h2>
                    <p className="thankyou-subtext">I typically check my messages within the week.</p>
                    <p className="thankyou-subtext">If a response is needed sooner, please reach out via LinkedIn.</p>
                    <BasicButton onClick={handleHomeClick} id="returnHomeButton">
                        Return to Home
                    </BasicButton>
                </div>
            </div>
        </>
    )
}