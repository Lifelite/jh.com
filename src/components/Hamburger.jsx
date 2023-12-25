import {useRef, useEffect} from "react";
import {gsap} from "gsap";
import {Link} from "react-router-dom";
import "../styles/NavBar.scss"

import {
    staggerText,
    staggerReveal,
    fadeInUp,
    handleHover,
    handleHoverExit,
    handleOptionReturn,
    handleOption,
    staggerRevealClose
} from "../functions/animations.js";

import blog from "../images/blog.jpeg";
import linkedin from "../images/linkedin.jpeg";
import github from "../images/github.jpeg";
import partytime from "../images/partytime.jpeg";
import admin from "../images/admin.webp";
import PropTypes from "prop-types";

const other = [
    {name: "Blog", image: blog, url: "/blog"},
    {name: "LinkedIn", image: linkedin, url: "https://www.linkedin.com/in/jeremyhuntsman/"},
    {name: "GitHub", image: github, url: "https://github.com/lifelite"},
    {name: "Party Time!", image: partytime, url: "/partytime"},
    {name: "Admin", image: admin, url: "/admin"}
];

const Hamburger = (props) => {
    const {
        state
    } = props


    // Create varibles of our dom nodes
    let menuLayer = useRef(null);
    let reveal1 = useRef(null);
    let reveal2 = useRef(null);
    let optionBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let info = useRef(null);

    useEffect(() => {
        // If the menu is open and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed and we want to open it.

            staggerRevealClose(reveal2, reveal1);
            // Set menu to display none
            gsap.to(menuLayer, {duration: 1, css: {display: "none"}});
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to(menuLayer, {duration: 0, css: {display: "block"}});
            //Allow menu to have height of 100%
            gsap.to([reveal1, reveal2], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(reveal1, reveal2);
            fadeInUp(info);
            staggerText(line1, line2, line3);
        }
    }, [state]);

    return (
        <div ref={el => (menuLayer = el)} className='hamburger-menu'>
            <div
                ref={el => (reveal1 = el)}
                className='menu-secondary-background-color'></div>
            <div ref={el => (reveal2 = el)} className='menu-layer'>
                <div
                    ref={el => (optionBackground = el)}
                    className='menu-city-background'></div>
                <div className='container'>
                    <div className='wrapper'>
                        <div className='menu-links'>
                            <nav>
                                <ul>
                                    <li>
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line1 = el)}
                                            to='/professional'>
                                            Professional
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line2 = el)}
                                            to='/personal'>
                                            Personal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line3 = el)}
                                            to='/contact-me'>
                                            Contact me
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div ref={el => (info = el)} className='info'>
                                <h3>Lorem Ipsum</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus bibendum
                                    fermentum est, sit amet fermentum sapien feugiat ut.
                                    Ut orci lacus, efficitur quis dui sed, congue venenatis massa.
                                    Aenean ultricies urna nec elementum efficitur. Nam a malesuada nulla, eget eleifend
                                    mauris.
                                    Cras elit nisl, facilisis sit amet molestie quis, consectetur sit amet felis.
                                    Suspendisse blandit id mauris ut auctor. Curabitur nec purus turpis.
                                </p>
                            </div>
                            <div className='locations'>
                                Other Links:
                                {other.map(el => (
                                    <Link
                                        to={el.url}
                                        key={el.name}
                                        onMouseEnter={() => handleOption(el.image, optionBackground)}
                                        onMouseOut={() => handleOptionReturn(optionBackground)}>
                                        {el.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Hamburger.propTypes = {
    state: PropTypes.any
}

export default Hamburger;