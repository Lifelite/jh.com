import {FlipCard} from "../../../components/cards/FlipCard.jsx";
import {Link} from "react-router-dom";
import websiteImage from "../../../images/websiteImage.png";
import voodooImage from "../../../images/voodooImage.jpeg";
import battleBotImage from "../../../images/battlebot.jpeg";
import dhImage from "../../../images/DH-Logo.png";
import "../styles/professional.scss"
import {Fragment} from "react";

export const Portfolio = () => {
    return (
        <><FlipCard
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
                cardTitle={"Full Home Server Stack"}
                frontButtonContent="Details"
                backButtonContent="back"
                background={websiteImage}
                frontContent={"ReactJS | Docker | Jenkins | Python | Postgres"}
                backLeftCornerContent={"Status: Deployed | Updating"}
                backRightCornerContent={<Link target="_blank" to={"https://github.com/Lifelite?tab=repositories&q=server&type=&language=&sort="}>GitHub
                    Repo</Link>}
            >
                After so many issues with &#34;free&#34; web services and the like, I decided to do my own infrastructure. <br/>
                This entire stack was done myself, utilizing all of my skills in front end, back end, DevOps, etc.
                It&#39;s running on a physical machine tower, which is running Ubuntu Linux, with a multitude of tools,
                such as Docker, Jenkins, and more. On various docker images, I am running Video Game Servers, Home
                automation,
                websites (such as this one), Postgres, API, and much more. Full CI/CD is setup, so that when a PR is
                merged into
                my main branches, it&#39;s properly tested and that code is deployed.  <br /> <br />
                Also, my friends and I are all able to remotely manage the game servers via a secure server management
                page, also build from scratch; allowing every one to spin up new instances, configure existing ones, update, etc.
                Also, just because I could, these are all controllable via Google Assistant, because, why not?
                <br /><br />
                List of some tools utilized:
                Postgres | Linux | JS | React | SASS | K8s | Terraform | Python | FastAPI | Node.js | Jenkins | GitHub Actions | Docker | Ngynx
                | Jest | Etc.
            </FlipCard>
            <FlipCard
                cardTitle={"Storm Automation Framework"}
                frontButtonContent="Details"
                backButtonContent="back"
                frontContent={"Python"}
                backLeftCornerContent={"Status: Alpha"}
                backRightCornerContent={<Link target="_blank"
                                              to="https://github.com/Lifelite/Voodoo_Automation_Framework">Github
                    Repo</Link>}
                background={voodooImage}
            >
                This is a completely custom made framework using my experience as a Quality Engineer to
                create a useful, feature-rich framework.  This framework gains inspiration from other frameworks,
                taking the best features, but enhancing them or enhancing the test writing experience.
                Primary inspiration for building this was due to the rising need for backend or cloud infrastructure
                testing, and how existing tools do allow for a solid test ecosystem that can blend or run different
                UI, Backend, or other test automation together.
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
                frontContent={"ReactJS | Vite"}
                backLeftCornerContent={"Status: Deployed | Updating"}
                backRightCornerContent={<Link target="_blank" to={"https://github.com/Lifelite/DHWebsite3"}>GitHub
                    Repo</Link>}
            >
                Created this website for my gaming community. This was a rushed job to get it out the door for
                our annual secret Santa Event, but it&#39;s fully functional and was used during the event to
                great
                success! <br/>
                The website utilizes Auth, MySQL, Cloud Functions, Dashboards, and more.
            </FlipCard>


        </>

    )
}
