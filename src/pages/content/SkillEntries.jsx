import {HoneyCombItem} from "../../components/honey-comb/HoneyCombItem.jsx";
import Selenium_Logo from "../../images/icons/Selenium_Logo.png"
import playwrightLogo from "../../images/icons/playwrightLogo.png"
import jetbrains from "../../images/icons/jetbrains.png"
import javascriptIcon from "../../images/icons/JavaScript-logo.png"
import htmlIcon from "../../images/icons/html.png"
import cssIcon from "../../images/icons/css.jpeg"
import reactIcon from "../../images/icons/react.svg"
import nodeJSIcon from "../../images/icons/nodejs-logo-FBE122E377-seeklogo.com.png"
import pythonIcon from "../../images/icons/Python.png"
import viteIcon from "../../images/icons/logo-with-shadow.png"
import gitIcon from "../../images/icons/git.png"
import dockerIcon from "../../images/icons/docker.png"
import npmIcon from "../../images/icons/npm.png"
import atlassianIcon from "../../images/icons/atlassian.png"
import gcpIcon from "../../images/icons/gcp.svg"
import sqlIcon from "../../images/icons/sqlIcon.svg"
import postmanIcon from "../../images/icons/postman.png"
import browserStackIcon from "../../images/icons/browserstack.jpeg"
import appiumIcon from "../../images/icons/appium.png"
import kotlinIcon from "../../images/icons/kotlin.jpg"
import mulesoftIcon from "../../images/icons/mulesoft.png"
import moreIcon from "../../images/icons/more.png"


export const SkillEntries = () => {

    const skills = [
        {
            backgroundURL: Selenium_Logo,
            title: "Selenium",
            subtitle: "8",
            id: "selenium",
            link: "https://www.selenium.dev/",
        },
        {
            backgroundURL: appiumIcon,
            title: "Appium",
            subtitle: "2",
            id: "appium",
            link: "https://www.appium.io/",
        },
        {
            backgroundURL: playwrightLogo,
            title: "Playwright",
            subtitle: "3",
            id: "playwright",
            link: "https://www.playwright.dev/",
        },
        {
            backgroundURL: browserStackIcon,
            title: "Browserstack",
            subtitle: "8",
            id: "browserstack",
            link: "https://www.browserstack.com/",
        },
        {
            backgroundURL: postmanIcon,
            title: "Postman",
            subtitle: "8",
            id: "Postman",
            link: "https://www.postman.com",
        },
        {
            backgroundURL: jetbrains,
            title: "JetBrains Suite",
            subtitle: "5",
            id: "jetbrains",
            link: "https://www.jetbrains.com/all/",
        },
        {
            backgroundURL: pythonIcon,
            title: "Python3",
            subtitle: "3",
            id: "python",
            link: "https://python.org",
        },
        {
            backgroundURL: gitIcon,
            title: "Git",
            subtitle: "8",
            id: "git",
            link: "https://git-scm.com/",
        },
        {
            backgroundURL: javascriptIcon,
            title: "JavaScript",
            subtitle: "7",
            id: "javascript",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            backgroundURL: htmlIcon,
            title: "HTML5",
            subtitle: "8",
            id: "html5",
            link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        },
        {
            backgroundURL: cssIcon,
            title: "CSS3",
            subtitle: "8",
            id: "css3",
            link: "https://www.w3.org/Style/CSS/Overview.en.html",
        },
        {
            backgroundURL: nodeJSIcon,
            title: "NodeJS",
            subtitle: "7",
            id: "nodejs",
            link: "https://nodejs.org/en",
        },
        {
            backgroundURL: npmIcon,
            title: "NPM",
            subtitle: "7",
            id: "npm",
            link: "https://www.npmjs.com/",
        },
        {
            backgroundURL: viteIcon,
            title: "Vite",
            subtitle: "1",
            id: "vite",
            link: "https://vite.dev/",
        },
        {
            backgroundURL: reactIcon,
            title: "React",
            subtitle: "1",
            id: "react",
            link: "https://www.react.dev",
        },
        {
            backgroundURL: dockerIcon,
            title: "Docker",
            subtitle: "1",
            id: "docker",
            link: "https://www.docker.com/",
        },
        {
            backgroundURL: atlassianIcon,
            title: "Atlassian Suite",
            subtitle: "7",
            id: "atlassian",
            link: "https://www.atlassian.com/",
        },
        {
            backgroundURL: gcpIcon,
            title: "Google Cloud Platform",
            subtitle: "3",
            id: "gcp",
            link: "https://cloud.google.com/",
        },
        {
            backgroundURL: mulesoftIcon,
            title: "Mulesoft",
            subtitle: "5",
            id: "mulesoft",
            link: "https://mulesoft.com/",
        },
        {
            backgroundURL: sqlIcon,
            title: "SQL",
            subtitle: "7",
            id: "sql",
            link: "https://www.oracle.com/database/technologies/appdev/sql.html",
        },
        {
            backgroundURL: kotlinIcon,
            title: "Kotlin",
            subtitle: "1",
            id: "kotlin",
            link: "https://kotlinlang.org/",
        },
        {
            backgroundURL: moreIcon,
            title: "And more!",
            subtitle: "many!",
            id: "and-more",
            link: "https://linkedin.com",
        },


    ]


    return (
        <>
            {skills.map(skill => (
                <HoneyCombItem
                    key={skill.id}
                    backgroundURL={skill.backgroundURL}
                    title={skill.title}
                    subtitle={skill.subtitle + " years"}
                    id={"skill-" + skill.id}
                    link={skill.link}
                    TitleId={skill.id + "-title"}
                />
            ))}
        </>
    )
}

