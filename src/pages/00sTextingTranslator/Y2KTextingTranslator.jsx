import {useEffect, useState} from "react";
import {y2kParser} from "../../functions/y2kParser.js";
import {TextArea} from "../../components/Forms/TextArea.jsx";
import NavBar from "../../components/NavBars/FancyNav/NavBar.jsx";
import "./Y2kTextingTranslator.scss"

import {BasicButton} from "../../components/Buttons/BasicButton.jsx";
import {BasicSwitchWithText} from "../../components/Switches/BasicSwitchWithText.jsx";
import {FullPageLoader} from "../../components/Loaders/FullPageLoader.jsx";
import {PacmanLoader} from "../../components/Loaders/PacmanLoader.jsx";

export const Y2KTextingTranslator = () => {

    const [message, setMessage] = useState(null);
    const [translatedValue, setTranslatedValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [switchValue, setSwitchValue] = useState("to")

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                y2kParser(switchValue.toString(), message).then((response) => {
                    setTranslatedValue(response.translate)
                    setIsLoading(false)
                })
            }, 3000);

        }
    },[isLoading])

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
                    some can&#39;t....either way this will help you! Select the dropdown to translate to or from the
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
                <TextArea
                    name="y2k-parser-response-field"
                    id="y2k-parser-response-field"
                    isDisabled={true}
                    value={translatedValue}
                />
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