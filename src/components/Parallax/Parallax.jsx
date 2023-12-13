import '../../styles/parallax.scss'
import {TextBlock} from "./TextBlock.jsx";
import ScollInFade from "../ScrollFadeIn.jsx";

export function Parallax() {

    return (
        <div className="parallax">
            <div className="hero" id="parallax-layer-div">
                <div className="parralax-layer" id="transitionblock"></div>
                <div className="parralax-layer" id="atlantabackground"></div>
                <div className="parralax-layer" id="jeremy"></div>
                <div className="parralax-layer" id="name"></div>
                <div className="parralax-layer" id="atlantaforeground"></div>
                <div className="parralax-layer" id="enterprise"></div>
                <div className="parralax-layer" id="deathstar"></div>
                <div className="parralax-layer" id="starback"></div>
            </div>
            <div className="intro">
                <ScollInFade>
                    <TextBlock color="primary" size="large">
                        Hi, I'm Jeremy Huntsman...
                    </TextBlock>
                </ScollInFade>
                <ScollInFade>
                    <div className="intro-body">
                        <TextBlock color="primary" size="h2" weight="normal">
                            A Quality Engineer by profession, with a passion for creating and problem-solving deeply
                            ingrained in my heart.

                            Whether you stumbled upon this website via LinkedIn, social media, or by sheer chance, I
                            extend
                            a warm welcome!
                        </TextBlock>
                        <TextBlock color="primary" size="h2" weight="normal">
                            I am currently employed as a Quality Engineer at Arvest Bank, and my enthusiasm for
                            crafting,
                            constructing, and tackling challenges extends beyond the confines of my professional life
                            into
                            my personal pursuits.
                        </TextBlock>
                        <TextBlock color="primary" size="h2" weight="normal">
                            This website serves as both a resume and a testament to my professional
                            skills. I aspire not merely to be a Quality Engineer or a Developer but to transcend these
                            roles.

                            My ardor lies in building, creating, and devising solutions for intricate problems, but
                            above
                            all, I am fueled by a love for continuous learning.
                        </TextBlock>
                    </div>
                </ScollInFade>
            </div>
        </div>
    )
}