import "../styles/Contact.scss"
import NavBar from "../components/NavBar.jsx";
import {HeroHeader} from "../components/HeroHeader/HeroHeader.jsx";

export function Contact() {
    return (
        <div className="personal">
            <NavBar />
            <HeroHeader
                title="Jeremy Huntsman"
                subtitle="Coming Soon"
            />
        </div>
    )
}