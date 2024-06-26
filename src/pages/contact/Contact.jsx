import "./styles/contact.scss"
import NavBar from "../../components/navbars/NavBar.jsx";
import {BasicButton} from "../../components/buttons/BasicButton.jsx";
import {TextField} from "../../components/forms/TextField.jsx";
import {TextArea} from "../../components/forms/TextArea.jsx";
import {useRef, useState} from "react";
import {FullPageLoader} from "../../components/loaders/FullPageLoader.jsx";
import {PacmanLoader} from "../../components/loaders/PacmanLoader.jsx";
import {postMessage} from "./utils/postContactFormData.js"
import {useNavigate} from "react-router-dom";

const isButtonDisabled = (name, email) => {
    return !(name !== "" && email !== "");
}

export function Contact() {
    const [nameField, setNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [messageField, setMessageField] = useState("")
    const buttonDisabled = isButtonDisabled(nameField, emailField)
    const [loading, setLoading] = useState(false)
    const formRef = useRef();
    const handleEmailChange = (e) => {
        setEmailField(e.target.value)
    }

    const handleNameChange = (e) => {
        setNameField(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessageField(e.target.value)
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = postMessage(nameField, emailField, messageField);
            console.log(JSON.stringify(response));
        } catch (error) {
            alert("Sorry, something broke on my end. " +
                "contact me on LinkedIn and let me know!  Error info:" + error);
            console.log(error)
        }
        setLoading(false);
        navigate("/thank-you")
    }

    const loader = () => {
        if (loading) {
            return (
                <FullPageLoader>
                    <PacmanLoader />
                </FullPageLoader>
        )
                }
    }

    return (
        <div className="contact">
            {loader()}
            <NavBar/>
            <div className="contact-form">
                <div className="contact-title">
                    <h2>Get in touch!</h2>
                    <p>Drop me a message for business inquiries, feedback...</p>
                    <p>...or maybe fan-mail?</p>
                    <p>No? Well, one can dream.</p>
                </div>
                <form
                    id="contact-me-form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        name="name"
                        value={nameField}
                        onChange={handleNameChange}
                        type="text"
                        className="feedback-input"
                        placeholder="Name"
                        id="contact-name-field"
                        isRequired={true}
                    />
                    <TextField
                        name="email"
                        type="email"
                        value={emailField}
                        onChange={handleEmailChange}
                        className="feedback-input"
                        placeholder="Email"
                        id="contact-email-field"
                        isRequired={true}
                    />
                    <TextArea
                        name="text"
                        className="feedback-input"
                        placeholder="Comment"
                        onChange={handleMessageChange}
                        value={messageField}
                    />
                    <BasicButton
                        isDisabled={buttonDisabled}
                        type="submit"
                    >
                        Submit
                    </BasicButton>
                </form>
            </div>
        </div>
    )
}