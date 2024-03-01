import {HoverCard} from "../../../components/cards/HoverCard.jsx";
import ualr from "../../../images/ualr.jpeg";
import oracle from "../../../images/Oracle.png"
import istqb from "../../../images/ISTQB.png"
import PropTypes from "prop-types";
import "../styles/professional.scss";

export const EducationEntries = () => {

    return (

        <div className="professional-education-items">
            <div className="professional-education-item-container">
                <HoverCard
                    title="Associates of Arts"
                    image={ualr}
                    imageAlt="University of Little Rock Logo"
                    bodyText="University of Little Rock"
                    id="card1"
                />
            </div>
            <div className="professional-education-item-container">
                <HoverCard
                    title="Certified Tester"
                    image={istqb}
                    imageAlt="ISTQB Logo"
                    bodyText="ISTQB-F"
                    id="card2"
                />
            </div>
            <div className="professional-education-item-container">
                <HoverCard
                    title="Oracle SQL Certified Associate"
                    image={oracle}
                    imageAlt="Oracle SQL Certification Logo"
                    bodyText="Oracle"
                    id="card3"
                />
            </div>
        </div>
    )
};

EducationEntries.defaultProps = {
    visibilitySensorProps: {partialVisibility: true, offset: {bottom: 50}}
};

EducationEntries.propTypes = {
    visibilitySensorProps: PropTypes.shape({}),
};