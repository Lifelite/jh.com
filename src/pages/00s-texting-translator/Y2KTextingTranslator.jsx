import {useEffect, useState} from "react";
import {y2kParser} from "./utils/y2kParser.js";
import {TextArea} from "../../components/forms/TextArea.jsx";
import NavBar from "../../components/navbars/NavBar.jsx";
import "./styles/y2k-texting-translator.scss"

import {BasicButton} from "../../components/buttons/BasicButton.jsx";
import {BasicSwitchWithText} from "../../components/switches/BasicSwitchWithText.jsx";
import {FullPageLoader} from "../../components/loaders/FullPageLoader.jsx";
import {PacmanLoader} from "../../components/loaders/PacmanLoader.jsx";

export const Y2KTextingTranslator = () => {

    const [message, setMessage] = useState(null);
    const [translatedValue, setTranslatedValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [switchValue, setSwitchValue] = useState("to")

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                y2kParser(switchValue.toString(), message).then((value)=> {
                    console.log(value)
                    setTranslatedValue(value.translation)
                    console.log(value.translation)
                })
                setIsLoading(false)
            }, 3000);


    }},[isLoading])

    const handleRequestChange = (e) => {
        let changedMessage = e.target.value;
        setMessage(changedMessage);
    }

    const handleSwitchChange = (e) => {
        if (e.target.value === "to") {
            setSwitchValue("from")
        } else {
            setSwitchValue("to")
        }
    }

    const loader = () => {
        if (isLoading) {
            return(
                <FullPageLoader>
                    <PacmanLoader />
                </FullPageLoader>
            )
        }
    }

    const handleButtonClick = () => {
        if (switchValue === "from"){
            let newString = message.replace(/[^0-9 |#]/g, "")
            setMessage(newString)
        }
        setIsLoading(true)
    }

    return (
        <>
            <NavBar />
            {loader()}
            <div className="y2k-parser">
                <h2>Y2k MultiTap translator</h2>
                <p>At one point long long ago, some remember a time when you put typed texts using a special method
                    that only worked with a 9 12key phone dialer.  Those who remember can read the old code,
                    some can&#39;t....either way this will help you! <br /><br />
                    Select the dropdown to translate to or from the
                    old magic code, and place your message in the field, then translate away!
                </p>
                <BasicSwitchWithText
                    id={"to-from-switch"}
                    value={switchValue}
                    onChange={handleSwitchChange}
                />
                <TextArea
                    name="y2k-parser-request-field"
                    id="y2k-parser-request-field"
                    onChange={handleRequestChange}
                    value={message}
                    placeholder="Message to be translated..."
                    />
                <h3>Translation</h3>
                <span className="translation">
                    {translatedValue}
                </span>
                <div className="translate-button">
                    <BasicButton
                        isDisabled={!(message)}
                        onClick={handleButtonClick}
                    >
                        Translate!
                    </BasicButton>
                </div>
            </div>
        </>
    )
}