
import {RadioButtonBasic} from "../../../components/radio-buttons/RadioButtonBasic.jsx";
import {BasicAccordion} from "../../../components/accordions/BasicAccordion.jsx";
import {BasicAccordionItem} from "../../../components/accordions/BasicAccordionItem.jsx";
import {HighlightCheckBox} from "../../../components/checkboxes/HighlightCheckBox.jsx";
import {usePalWorldData} from "./PalWorldStateManager.jsx";


export function GamePlayOptionsSection() {
    const {gameplayOptions} = usePalWorldData();

    const dropdownOptions = gameplayOptions.dropDownOptions[0];
    const checkBoxOptions = gameplayOptions.checkBoxOptions;


    return (
        <>
        <div className="palworld-form">
            <h2>Gameplay Options</h2>
            <div className="palworld-option-section">
            <BasicAccordion>
                <BasicAccordionItem
                    title={dropdownOptions.title}
                    id={`Gameplay-Option-${dropdownOptions.title}`}
                >
                    {dropdownOptions.description}
                </BasicAccordionItem>
            </BasicAccordion>
            <div className="palworld-form-option">
                {dropdownOptions.options.map(option => (
                    <RadioButtonBasic
                        key={option}
                        text={option}
                        value={option}
                        onClick={dropdownOptions.handler}
                        checked={(option === dropdownOptions.value)}
                    />
                ))}
            </div>

            </div>
            {checkBoxOptions.map(option => (
                <div className="palworld-option-checkbox-section" key={option.title}>
                    <div className="palworld-form-option">

                        <HighlightCheckBox
                            id={option.title}
                            value={option.value}
                            onChange={option.handler}
                            >
                        </HighlightCheckBox>
                    </div>
                    <BasicAccordion>
                        <BasicAccordionItem
                            title={option.title}
                            id={`Pal-Option-${option.title}`}
                        >
                            {option.description}
                        </BasicAccordionItem>

                    </BasicAccordion>


                </div>
            ))}
        </div>
        </>
    )
}