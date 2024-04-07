import Timeline from "../../components/timeline/Timeline.jsx";
import {TimelineEntries} from "./content/TimelineEntries.jsx";
import "./styles/professional.scss"
import {HeroHeader} from "../../components/heroes/HeroHeader.jsx";
import neoncity from "../../images/backgroundpro.jpeg"
import {EducationEntries} from "./content/EducationEntries.jsx"
import {HoneyComb} from "../../components/honeycomb/HoneyComb.jsx";
import {SkillEntries} from "./content/SkillEntries.jsx";
import {Link} from "react-router-dom";
import {Footer} from "../../components/footer/Footer.jsx";
import NavBar from "../../components/navbars/NavBar.jsx";
import {Portfolio} from "./content/Portfolio.jsx";

export function Professional() {

    const handleScrollToTop = () => {
        scrollTo(0,0)
    };

    return (
        <div className="professional">
            <NavBar />
            <div className="professional-title__top"></div>
            <div className="professional-hero" id="top">
                <HeroHeader
                    title="Jeremy Huntsman"
                    subtitle="Lead Quality Engineer"
                    bubbleLife={20}
                    bubbleCount={100}
                    background={`url(${neoncity})`}
                />
            </div>
            <div className="professional-timeline" id="timeline">
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
                <EducationEntries/>
            </div>

            <div className="professional-skills">
                <div className="professional-title" id="skills">
                    Skills & Technologies
                </div>
                <HoneyComb>
                    <SkillEntries/>
                </HoneyComb>
            </div>
            <div className="professional-portfolio">
                <div className="professional-title" id="portfolio">
                    Projects & Portfolio
                </div>
                <div className="professional-portfolio-items">
                    <Portfolio />
                </div>
            </div>
            <div className="professional-footer">
                <Footer bubbleCount={25}>
                    <div>
                        <div className="footer-links">

                            <p>© 2024 Jeremy Huntsman. All rights reserved.</p>

                        </div>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact-me">Contact</Link></li>
                            <li><Link to="#top" onClick={handleScrollToTop}>Back to Top</Link></li>
                        </ol>
                    </div>

                </Footer>
            </div>
        </div>
    )
}