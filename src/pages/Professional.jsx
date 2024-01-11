import Timeline from "../components/Timeline/Timeline.jsx";
import {TimelineEntries} from "../content/TimelineEntries.jsx";
import "../styles/professional.scss"
import {HeroHeader} from "../components/HeroHeader/HeroHeader.jsx";
import neoncity from "../images/neoncity.jpeg"
import {EducationEntries} from "../content/EducationEntries.jsx"
import {HoneyComb} from "../components/HoneyComb/HoneyComb.jsx";
import {SkillEntries} from "../content/SkillEntries.jsx";
import {FlipCard} from "../components/FlipCard.jsx";

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
            <div className="professional-timeline">
                <div className="professional-title">
                    Career Timeline
                </div>
                <Timeline lineColor="#ffaf1b">
                    <TimelineEntries/>
                </Timeline>

            </div>
            <div className="professional-education">
                <div className="professional-title" id="education">
                    Education & Certifications
                </div>
                <EducationEntries />
            </div>

            <div className="professional-skills">
                <div className="professional-title" id="skills">
                    Skills & Technologies
                </div>
                <HoneyComb>
                    <SkillEntries />
                </HoneyComb>
            </div>
            <div className="professional-portfolio">
                <div className="professional-title" id="portfolio">
                    Projects & Portfolio
                </div>
                <div className="professional-portfolio-items">
                    <FlipCard
                        cardTitle={"Voodoo Automation Framework"}
                        frontButtonContent="Details"
                        backButtonContent="back"
                        frontContent={"Using Python and Selenium"}
                        backLeftCornerContent={"Work In Progress"}
                        backRightCornerContent={"See Github"}
                    >
                        This is my work in progress Automation framework using Python with Playwright.
                        It started as a learning project and I ended up using it for a variety of uses, but
                        it needs to be updated as this was one of those &#34;POCs that turned into tech debt&#34;
                    </FlipCard>
                    <FlipCard
                        cardTitle={"This Website!"}
                        frontButtonContent="Details"
                        backButtonContent="back"
                        frontContent={"I built this!"}
                        backLeftCornerContent={"Work In Progress"}
                        backRightCornerContent={"See Github"}
                    >
                        Everything seen on this web, I built from scratch.  Wanted a professional looking website
                        to showcase my skills, learn while doing, and also try different things!  <br />
                        <br />
                        What is a Quality Engineer doing building elaborate websites?  I&#39;m a firm believer that you&#39;re
                        only truly able to test something as much as you understand it, otherwise it&#39;s just educated UAT.
                        <br />
                        I also very much enjoy it.  It&#39;s something I do as a hobby and maybe something I&#39;ll choose to do
                        for my career someday!
                    </FlipCard>
                </div>
            </div>
        </div>
    )
}