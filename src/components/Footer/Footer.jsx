import "../../styles/Footer.scss"
import PropTypes from "prop-types";
import {FooterBlob} from "./FooterBlob.jsx";

export function Footer(props) {
    const {
        bubbleCount,
        children,
    } = props;


    const bubbleHandler = () => {
        let bubbleArray = [];
        for (let i = 0; i < bubbleCount; i++) {
            bubbleArray.push(i);
        }
        return bubbleArray;
    };

    const bubbles = bubbleHandler()


    return (
        <div className="footer-wrapper">
            <div className="footer-animated">
                {bubbles.map((id, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <FooterBlob bubbleCount={bubbleCount} id={'gloop' + id} key={index}/>
                ))}
                <div className="footer-content">
                    {children}
                </div>
            </div>
            <svg style={{
                position: 'fixed',
                top: 40 + 'vh',
            }}>
                <defs>
                    <filter id="blob">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"/>
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="blob"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

Footer.defaultProps = {
    bubbleCount: 128,
}

Footer.propTypes = {
    bubbleCount: PropTypes.number,
    children: PropTypes.node,
}