import Timeline from "../components/Timeline/Timeline.jsx";
import {TimelineEntries} from "../content/TimelineEntries.jsx";
import "../styles/Professional.scss"
import {HeroHeader} from "../components/Heroes/BubbleHero/HeroHeader.jsx";
import neoncity from "../images/backgroundpro.jpeg"
import {EducationEntries} from "../content/EducationEntries.jsx"
import {HoneyComb} from "../components/HoneyComb/HoneyComb.jsx";
import {SkillEntries} from "../content/SkillEntries.jsx";
import {FlipCard} from "../components/Cards/3DFlipCard/FlipCard.jsx";
import {Link} from "react-router-dom";
import websiteImage from "../images/websiteImage.png"
import {Footer} from "../components/Footer/Footer.jsx";
import NavBar from "../components/NavBars/FancyNav/NavBar.jsx";
import voodooImage from "../images/voodooImage.jpeg"
import battleBotImage from "../images/battlebot.jpeg"
import dhImage from "../images/DH-Logo.png"

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
                    <FlipCard
                        cardTitle={"This Website"}
                        frontButtonContent="Details"
                        backButtonContent="back"
                        frontContent="ReactJS | Sass | Vite"
                        backLeftCornerContent={"Status: Production - Ongoing"}
                        backRightCornerContent={<Link target="_blank" to={"https://github.com/Lifelite/jh.com"}>GitHub Repo</Link>}
                        background={websiteImage}
                    >
                        Everything seen on this web, I built from scratch. Wanted a professional looking website
                        to showcase my skills, learn while doing, and experiment ideas. <br/>
                        <br/>
                        What is a Quality Engineer doing building websites? I&#39;m a firm believer that you&#39;re
                        only truly able to test something as much as you understand it, otherwise it&#39;s just educated
                        UAT.
                        <br/>
                        I also very much enjoy it. It&#39;s something I do as a hobby and maybe something I&#39;ll
                        choose to do
                        for my career someday. I like to keep an open path, because one never knows where life will take
                        you!
                    </FlipCard>
                    <FlipCard
                        cardTitle={"Voodoo Automation Framework"}
                        frontButtonContent="Details"
                        backButtonContent="back"
                        frontContent={"Playwright | Python"}
                        backLeftCornerContent={"Status: Rebuilding"}
                        backRightCornerContent={<Link target="_blank" to="https://github.com/Lifelite/Voodoo_Automation_Framework">Github Repo</Link>}
                        background={voodooImage}
                    >
                        This is my work in progress Automation framework using Python with Playwright.
                        It started as a learning project and I ended up using it for a variety of uses, but
                        it needs to be updated as this was one of those &#34;POCs that turned into tech debt&#34;
                    </FlipCard>
                    <FlipCard
                        cardTitle={"Discord Battle Bot"}
                        frontButtonContent="Details"
                        backButtonContent="back"
                        frontContent={"Python"}
                        backLeftCornerContent={"Status: Depreciated"}
                        background={battleBotImage}
                        backRightCornerContent={<Link target="_blank" to={"https://github.com/Lifelite/discordbattlebot"}>GitHub
                            Repo</Link>}
                    >
                        This was a fun weekend project using Python and Discord.gg&#39;s API to build a simple character
                        battle game for my friends in my discord server. It utilizes their API along with a cloud MySQL
                        database allow users to create, edit, and delete their characters; as well as allowing them to
                        start a battle that pits all the characters against each other in a tournament style battle.
                    </FlipCard>
                    <FlipCard
                        cardTitle={"Gaming Community Website"}
                        frontButtonContent="Details"
                        backButtonContent="back"
                        background={dhImage}
                        frontContent={"ReactJS | MaterialUI | Vite"}
                        backLeftCornerContent={"Status: Deployed | Updating"}
                        backRightCornerContent={<Link target="_blank" to={"https://github.com/Lifelite/DHWebsite3"}>GitHub Repo</Link>}
                    >
                        Created this website for my gaming community. This was a rushed job to get it out the door for
                        our annual secret Santa Event, but it&#39;s fully functional and was used during the event to
                        great
                        success! <br/>
                        The website utilizes Auth, MySQL, Cloud Functions, Dashboards, and more.
                    </FlipCard>
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