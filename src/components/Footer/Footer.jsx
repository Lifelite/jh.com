import {FooterBubble} from "./FooterBubble.jsx";
import "../../styles/Footer.scss"
import PropTypes from "prop-types";
export function Footer(props) {
    const {
        bubbleAmount,
        children,
    } = props;


    return (
        <div className="footer-wrapper">
            <div className="footer-animated">
                <FooterBubble bubbleAmount={bubbleAmount}/>
                <div className="footer-content">
                    {children}
                </div>
            </div>
            <svg style={{
                position:'fixed',
                top:100+'vh',
            }}>
                <defs>
                    <filter id="blob">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="blob" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

Footer.propTypes = {
    bubbleAmount: PropTypes.number,
    children: PropTypes.node,
}