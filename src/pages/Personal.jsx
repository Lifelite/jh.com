import NavBar from "../components/NavBars/FancyNav/NavBar.jsx";
import "../styles/Personal.scss";
import jeremy from "../images/me.jpg"
import {BoxesHero} from "../components/Heroes/BoxesHero/BoxesHero.jsx";
import {PerspectiveCarousel} from "../components/Carousels/Perspective/PerspectiveCarousel.jsx";
import {CarouselSlide} from "../components/Carousels/Perspective/CarouselSlide.jsx";
import testImage from "../images/DH-Logo.png"
export function Personal() {



    return (
        <div className="personal">
            <NavBar/>
            <BoxesHero
                heroImage={jeremy}
                title="Hello there,"
                subtitle="welcome to...me."
                imageAlt="Jeremy Picture"
            />
            <div className="content">
                <div className="site-container">
                    <h2>This page is still being built</h2>
                    <p>Excuse the mess.</p>
                    <p>Testing out a bunch of new components being built from scratch.
                    Eventually there will be content, and it will be awesome.</p>
                </div>
            </div>
        </div>

    )
}