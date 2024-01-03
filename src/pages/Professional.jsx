import Timeline from "../components/Timeline/Timeline.jsx";
import {TimelineEntries} from "../content/TimelineEntries.jsx";
import "../styles/professional.scss"
import {HeroHeader} from "../components/HeroHeader/HeroHeader.jsx";
import neoncity from "../images/neoncity.jpeg"
import {EducationEntries} from "../content/EducationEntries.jsx"

export function Professional() {


    return (
        <div className="professional">
            <div className="professional-hero">
                <HeroHeader
                    title="Jeremy Huntsman"
                    subtitle="Lead Quality Engineer"
                    bubbleLife={20}
                    bubbleCount={100}
                    background={`url(${neoncity})`}
                />
            </div>
            <div className="professional-resume">
                <div className="professional-title">
                    Career Timeline
                </div>
                <Timeline lineColor="#ffaf1b">
                    <TimelineEntries/>
                </Timeline>
                <EducationEntries />
            </div>
            <div className="professional-skills">

            </div>
        </div>
    )
}