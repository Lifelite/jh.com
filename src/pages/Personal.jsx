import NavBar from "../components/NavBar.jsx";
import {HeroHeader} from "../components/HeroHeader/HeroHeader.jsx";
import "../styles/Personal.scss";
export function Personal() {
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