import "./styles/palworld.scss"
import {PalOptionsSection} from "./sections/PalOptionsSection.jsx";
import {BaseOptionsSection} from "./sections/BaseOptionsSection.jsx";
import {ItemOptionsSection} from "./sections/ItemOptionsSection.jsx";
import {PlayerOptionsSection} from "./sections/PlayerOptionsSection.jsx";
import {GamePlayOptionsSection} from "./sections/GamePlayOptionsSection.jsx";
import {GuildOptionsSection} from "./sections/GuildOptionsSection.jsx";
import {ServerOptionsSection} from "./sections/ServerOptionsSection.jsx";
import {PalWorldStateManager} from "./sections/PalWorldStateManager.jsx";
import {WorldOptionsSection} from "./sections/WorldOptionsSection.jsx";
import {SubmissionSection} from "./sections/SubmissionSection.jsx";


export function PalWorld() {



    return (
        <>
            <PalWorldStateManager>
                <div className="palworld-background"/>
                <div className="palworld">
                    <div className="palworld-title">
                        <h2>PalWorld Server World Configurator</h2>
                        <h5>
                            This is a tool to assist with configuring PalWorld Dedicated Servers wrapped up in a decent
                            GUI.
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
                    <WorldOptionsSection/>
                    <ServerOptionsSection/>
                    <SubmissionSection />
                </div>
            </PalWorldStateManager>
        </>

    )
}