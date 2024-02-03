import FancyAnimatedButton from "../../../components/Buttons/FancyAnimatedButton.jsx";
import {usePalWorldData} from "./PalWorldStateManager.jsx";
import {SimpleModal} from "../../../components/Modals/SimpleModal/SimpleModal.jsx";
import {useState} from "react";

export function SubmissionSection() {
    const {handleFormSubmit, palWorldSettingsOutput} = usePalWorldData();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        handleFormSubmit()
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <div className="palworld-submit-button">
            <FancyAnimatedButton
                onClick={openModal}
                id={"Palworld-Build-Button"}
            >Create .ini File</FancyAnimatedButton>
        </div>
                <SimpleModal
                title="Here's your output that you can copypasta into your ini file! "
                subtitle="BACK UP YOUR CURRENT SAVE/INI FILE, something might have changed since building this, causing issues.  Make sure it's 2 lines in the file (with the brackets in the first, options second). Should copy just fine though."
                text="[/Script/Pal.PalGameWorldSettings]"
                moreText={palWorldSettingsOutput}
                isOpen={isModalOpen}
                onClose={closeModal}
        />


        </>
    )
}