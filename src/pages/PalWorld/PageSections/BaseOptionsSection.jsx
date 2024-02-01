import FormStatesHandlers from "../optionContents.js";
import {BasicAccordion} from "../../../components/Accordions/BasicAccordion/BasicAccordion.jsx";
import {BasicAccordionItem} from "../../../components/Accordions/BasicAccordion/BasicAccordionItem.jsx";
import {RangeSlider} from "../../../components/Sliders/RangeSlider/RangeSlider.jsx";
import {TextField} from "../../../components/Forms/TextField.jsx";

export function BaseOptionsSection() {
    const {baseOptions} = FormStatesHandlers();

    const sliderOptions = baseOptions.sliderOptions;

    return (
        <>
            <div className="palworld-form">
                <h2>Base Options</h2>
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
            </div>
        </>
    )
}