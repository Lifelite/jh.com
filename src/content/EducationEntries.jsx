import {HoverCard} from "../components/HoverCard.jsx";
import ualr from "../images/ualr.jpeg";
import oracle from "../images/Oracle.png"
import istqb from "../images/ISTQB.png"
import PropTypes from "prop-types";
import "../styles/professional.scss";
import BounceIn from "../components/BounceIn.jsx";

export const EducationEntries = () => {

    return (

            <div className="professional-education-items">
                <BounceIn delay={.4}>
                    <HoverCard
                        title="Associates of Arts"
                        image={ualr}
                        bodyText="University of Little Rock"
                        id="card1"
                    />
                </BounceIn>
                <BounceIn delay={.12}>
                    <HoverCard
                        title="Certified Tester"
                        image={istqb}
                        bodyText="ISTQB-F"
                        id="card2"
                    />
                </BounceIn>
                <BounceIn delay={.48}>
                    <HoverCard
                        title="Oracle SQL Certified Associate"
                        image={oracle}
                        bodyText="Oracle"
                        id="card3"
                    />
                </BounceIn>
            </div>

    )
};

EducationEntries.defaultProps = {
    visibilitySensorProps: {partialVisibility: true, offset: {bottom: 50}}
};

EducationEntries.propTypes = {
    visibilitySensorProps: PropTypes.shape({}),
};