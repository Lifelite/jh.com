import PropTypes from "prop-types";
import "../../styles/Footer.scss"
import {FooterBubbleGenerator} from "./FooterBubbleGenerator.jsx";
export const FooterBubble = (props) => {
    const {
        bubbleAmount,
    } = props

    function bubbleCreator() {
        let footerBubbles = [];
        for (let i = 0; i < {bubbleAmount}; i++) {
            footerBubbles.push(i)
        }
        return footerBubbles
    }

    const bubbles = bubbleCreator()

    return (
        <div className="footer-bubbles">
            {bubbles.map((bubble,index) => (
                <FooterBubbleGenerator key={index} id={'footer-bubble-'+bubble} />
            ))}
        </div>
    )
}

FooterBubble.defaultProps = {
    bubbleAmount: 128,
}

FooterBubble.propTypes = {
    bubbleAmount: PropTypes.number
}