import Timeline from "../components/Timeline/Timeline.jsx";
import TimelineItem from "../components/Timeline/TimelineItem.jsx";

export function Professional() {

    

    return (
        <>
            <div className="professional-title">
                Jeremy Huntsman - Lead Quality Engineer
            </div>
            <Timeline>
                <TimelineItem dateText="May 2011 - January 2021">
                    Test
                </TimelineItem>
                <TimelineItem dateText="January 2021 - July 2022">
                    Test
                </TimelineItem>
                <TimelineItem dateText="July 2022 - Present">
                    Test
                </TimelineItem>
            </Timeline>
        </>
    )
}