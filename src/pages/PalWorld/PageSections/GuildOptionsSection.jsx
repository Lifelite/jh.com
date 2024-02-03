import {BasicAccordion} from "../../../components/Accordions/BasicAccordion/BasicAccordion.jsx";
import {BasicAccordionItem} from "../../../components/Accordions/BasicAccordion/BasicAccordionItem.jsx";
import {RangeSlider} from "../../../components/Sliders/RangeSlider/RangeSlider.jsx";
import {TextField} from "../../../components/Forms/TextField.jsx";
import {HighlightCheckBox} from "../../../components/CheckBoxes/HighlightCheckBox/HighlightCheckBox.jsx";
import {usePalWorldData} from "./PalWorldStateManager.jsx";

export function GuildOptionsSection() {

    const {guildOptions} = usePalWorldData()

    const sliderOptions = guildOptions.sliderOptions;
    const checkBoxOptions = guildOptions.checkboxOptions;

    return (
        <>
            <div className="palworld-form">
                <h2>Guild Options</h2>
                {sliderOptions.map(option => (
                    <div className="palworld-option-section" key={option.title}>
                        <BasicAccordion>
                            <BasicAccordionItem
                                title={option.title}
                                id={`Pal-Option-${option.title}`}
                            >
                                {option.description}
                            </BasicAccordionItem>

                        </BasicAccordion>
                        <div className="palworld-form-option">

                            <RangeSlider
                                min={option.min}
                                max={option.max}
                                step={option.step}
                                value={option.value}
                                onChange={option.handler}
                            />
                            <TextField
                                value={`${option.value}`}
                                onChange={option.handler}
                                type={"number"}
                            />
                        </div>
                    </div>
                ))}
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