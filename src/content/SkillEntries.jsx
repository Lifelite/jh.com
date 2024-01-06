import {HoneyCombItem} from "../components/HoneyComb/HoneyCombItem.jsx";
import Selenium_Logo from "../images/icons/Selenium_Logo.png"
import playwrightLogo from "../images/icons/playwrightLogo.png"
import jetbrains from "../images/icons/jetbrains.png"
import javascriptIcon from "../images/icons/JavaScript-logo.png"
import htmlIcon from "../images/icons/html.png"
import cssIcon from "../images/icons/CSS3_logo_and_wordmark.svg.png"
import reactIcon from "../images/icons/react.svg"
import nodeJSIcon from "../images/icons/nodejs-logo-FBE122E377-seeklogo.com.png"
import pythonIcon from "../images/icons/Python.png"
import viteIcon from "../images/icons/logo-with-shadow.png"
import gitIcon from "../images/icons/git.png"
import dockerIcon from "../images/icons/docker.png"


export const SkillEntries = () => {
    return (
        <>
            <HoneyCombItem
                backgroundURL={Selenium_Logo}
                title="Selenium"
                subtitle="8 Years Experience"
                id="skill-selenium"
                link="https://www.selenium.dev/"
                TitleId="selenium-title"
            />
            <HoneyCombItem
                backgroundURL={playwrightLogo}
                title="Playwright"
                subtitle="3 Years Experience"
                id="skill-playwright"
                link="https://www.playwright.dev/"
                TitleId="playwright-title"
            />
            <HoneyCombItem
                backgroundURL={jetbrains}
                title="JetBrains Suite"
                subtitle="5 Years Experience"
                id="skill-jetbrains"
                link="https://www.jetbrains.com/"
                TitleId="jetbrains-title"
            />
            <HoneyCombItem
                backgroundURL={javascriptIcon}
                title="JetBrains IDE Suite"
                subtitle="3 Years Experience"
                id="skill-jetbrains"
                link="https://www.jetbrains.com/"
                TitleId="jetbrains-title"
            />
            <HoneyCombItem
                backgroundURL={cssIcon}
                title="JetBrains IDE Suite"
                subtitle="3 Years Experience"
                id="skill-jetbrains"
                link="https://www.jetbrains.com/"
                TitleId="jetbrains-title"
            />
            <HoneyCombItem
                backgroundURL={htmlIcon}
                title="JetBrains IDE Suite"
                subtitle="3 Years Experience"
                id="skill-jetbrains"
                link="https://www.jetbrains.com/"
                TitleId="jetbrains-title"
            />
            <HoneyCombItem
                backgroundURL={reactIcon}
                title="JetBrains IDE Suite"
                subtitle="3 Years Experience"
                id="skill-jetbrains"
                link="https://www.jetbrains.com/"
                TitleId="jetbrains-title"
            />
            <HoneyCombItem
                backgroundURL={nodeJSIcon}
                title="JetBrains IDE Suite"
                subtitle="3 Years Experience"
                id="skill-jetbrains"
                link="https://www.jetbrains.com/"
                TitleId="jetbrains-title"
            />
            <HoneyCombItem
                backgroundURL={viteIcon}
                title="JetBrains IDE Suite"
                subtitle="3 Years Experience"
                id="skill-jetbrains"
                link="https://www.jetbrains.com/"
                TitleId="jetbrains-title"
            />
            <HoneyCombItem
                backgroundURL={dockerIcon}
                title="JetBrains IDE Suite"
                subtitle="3 Years Experience"
                id="skill-jetbrains"
                link="https://www.jetbrains.com/"
                TitleId="jetbrains-title"
            />
            <HoneyCombItem
                backgroundURL={gitIcon}
                title="JetBrains IDE Suite"
                subtitle="3 Years Experience"
                id="skill-jetbrains"
                link="https://www.jetbrains.com/"
                TitleId="jetbrains-title"
            />
            <HoneyCombItem
                backgroundURL={pythonIcon}
                title="JetBrains IDE Suite"
                subtitle="3 Years Experience"
                id="skill-jetbrains"
                link="https://www.jetbrains.com/"
                TitleId="jetbrains-title"
            />

        </>
    )
}

// rotate3d(0,0,1,-60deg) skewY(30deg);