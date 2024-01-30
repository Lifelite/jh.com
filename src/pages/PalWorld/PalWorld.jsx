import "./PalWorld.scss"
import {PalOptionsSection} from "./PageSections/PalOptionsSection.jsx";
import {BaseOptionsSection} from "./PageSections/BaseOptionsSection.jsx";
import {ItemOptionsSection} from "./PageSections/ItemOptionsSection.jsx";
import {PlayerOptionsSection} from "./PageSections/PlayerOptionsSection.jsx";
import {HighlightCheckBox} from "../../components/CheckBoxes/HighlightCheckBox/HighlightCheckBox.jsx";


export function PalWorld() {

    return (
        <>
            <div className="palworld-background" />
            <div className="palworld">
                <div className="palworld-title">
                    <h2>PalWorld Server World Configurator</h2>
                    <h5>
                        This is a tool to assist with configuring PalWorld Dedicated Servers wrapped up in a decent GUI.
                        <br/>
                        <br/>
                        If you experience issues or just want to give me kudos, leave me a message!
                    </h5>
                </div>
                <div className="palworld-settings-selector">
                    {/*    PALWORLD EASY SETTINGS SELECTOR   */}
                    {/*    Casual /  Normal / Hard  */}
                </div>
                <PalOptionsSection/>
                <BaseOptionsSection/>
                <ItemOptionsSection/>
                <PlayerOptionsSection/>
                <HighlightCheckBox>
                </HighlightCheckBox>
            </div>
        </>

    )
}