import "../styles/palworld.scss"
import {BasicAccordion} from "../../../components/accordions/BasicAccordion.jsx";
import {BasicAccordionItem} from "../../../components/accordions/BasicAccordionItem.jsx";
import {RangeSlider} from "../../../components/sliders/RangeSlider.jsx";
import {TextField} from "../../../components/forms/TextField.jsx";
import {usePalWorldData} from "./PalWorldStateManager.jsx";
export function PalOptionsSection() {
    const {palOptions} = usePalWorldData();

    const sliderOptions = palOptions.sliderOptions;

    return (
        <>
            <div className="palworld-form">
                <h2>Pal Options</h2>
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