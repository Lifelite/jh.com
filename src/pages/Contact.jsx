import "../styles/Contact.scss"
import NavBar from "../components/NavBar.jsx";
import {BasicButton} from "../components/Buttons/BasicButton.jsx";
import {TextField} from "../components/Forms/TextField.jsx";
import {TextArea} from "../components/Forms/TextArea.jsx";
import {useRef, useState} from "react";
import {FullPageLoader} from "../components/Loaders/FullPageLoader.jsx";
import {PacmanLoader} from "../components/Loaders/PacmanLoader.jsx";

export function Contact() {
    const [nameField, setNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [messageField, setMessageField] = useState("")
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false)
    const formRef = useRef();
    const handleEmailChange = (e) => {
        setEmailField(e.target.value)
        handleButton()
    }

    const handleNameChange = (e) => {
        setNameField(e.target.value)
        handleButton()
    }

    const handleMessageChange = (e) => {
        setMessageField(e.target.value)
    }

    const handleButton = () => {
        if (nameField && emailField) {
            setButtonDisabled(false)
        }
        if (!nameField || !emailField) {
            setButtonDisabled(true)
        }
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        const response = postMessage(nameField, emailField, messageField);
        if (response.status === 201) {
            const json = await response.json()
            console.log(json)
        } else {
            const error = await response.text()
            console.log(error)
            alert(error)
        }
        setLoading(false)
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