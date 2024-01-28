import "./PalWorld.scss"

import {RangeSlider} from "../../components/Sliders/RangeSlider/RangeSlider.jsx";
import {TextField} from "../../components/Forms/TextField.jsx";
import {useState} from "react";
import {BasicAccordion} from "../../components/Accordions/BasicAccordion/BasicAccordion.jsx";
import {BasicAccordionItem} from "../../components/Accordions/BasicAccordion/BasicAccordionItem.jsx";
import FormStatesHandlers from "./optionContents.js";
export function PalWorld() {
    const {
        handleCasualSettings,
        handleRecommendedSettings,
        handleHardSettings,
        palOptions,
        baseOptions,
        objectOptions,
        playerOptions,
        worldOptions,
        gameplayOptions,
        guildOptions,
        serverOptions,
    } = FormStatesHandlers();

    const world = worldOptions.sliderOptions[1];



    return (
        <div className="palworld">
            <div className="palworld-title">
            <h2>PalWorld Server World Configurator</h2>
            <h5>
                This is a tool to assist with configuring PalWorld Dedicated Servers wrapped up in a decent GUI.
                <br />
                <br />
                If you experience issues or just want to give me kudos, leave me a message!
            </h5>
            </div>
            <div className="palworld-settings-selector">
                {/*    PALWORLD EASY SETTINGS SELECTOR   */}
                {/*    Casual /  Normal / Hard  */}
            </div>
            <div className="palworld-form">
                <h2>World Options</h2>
                <BasicAccordion>
                    <BasicAccordionItem
                        title={"Daytime Speed Rate"}
                        id={"daytime-option"}
                    >
                        Change the speed of game time during the day.
                    </BasicAccordionItem>

                </BasicAccordion>
                <div className="palworld-form-option">

                    <RangeSlider
                        min={0}
                        max={2}
                        step={.1}
                        value={world.value}
                        onChange={world.handler}
                        />
                    <TextField
                        value={`${world.value}`}
                        onChange={world.handler}
                        type={"number"}
                    />
                </div>
            </div>
        </div>
    )
}