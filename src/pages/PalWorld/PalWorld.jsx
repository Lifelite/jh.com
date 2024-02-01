import "./PalWorld.scss"
import {PalOptionsSection} from "./PageSections/PalOptionsSection.jsx";
import {BaseOptionsSection} from "./PageSections/BaseOptionsSection.jsx";
import {ItemOptionsSection} from "./PageSections/ItemOptionsSection.jsx";
import {PlayerOptionsSection} from "./PageSections/PlayerOptionsSection.jsx";
import {GamePlayOptionsSection} from "./PageSections/GamePlayOptionsSection.jsx";
import {GuildOptionsSection} from "./PageSections/GuildOptionsSection.jsx";
import {ServerOptionsSection} from "./PageSections/ServerOptionsSection.jsx";
import FancyAnimatedButton from "../../components/Buttons/FancyAnimatedButton.jsx";
import FormStatesHandlers from "./optionContents.js";


export function PalWorld() {
    const {handleFormSubmit} = FormStatesHandlers();


    return (
        <>
            <div className="palworld-background"/>
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
                <GamePlayOptionsSection/>
                <GuildOptionsSection/>
                <ServerOptionsSection/>
                <div className="palworld-submit-button">
                    <FancyAnimatedButton
                        onClick={handleFormSubmit}
                        id={"Palworld-Build-Button"}
                    >Create .ini File</FancyAnimatedButton>
                </div>
            </div>
        </>

    )
}