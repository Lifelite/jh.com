import "../../styles/HeroHeader.scss"
import PropTypes from "prop-types";
import {Bubble} from "./Bubble.jsx";


export function HeroHeader(props) {
    const {
        background,
        title,
        subtitle,
        bubbleLife,
        bubbleCount,
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
        <div className="hero_wrapper" style={{
            backgroundImage: background
        }}>
            {bubbles.map(id => (
                // eslint-disable-next-line react/jsx-key
                    <Bubble bubbleLifeTime={bubbleLife} id={'bubble' + id}/>
                ))}
            <div className="name_container">
                <div className="name">{title}</div>
                <div className="designation">{subtitle}</div>
            </div>

        </div>
    )
}

HeroHeader.defaultProps = {
    bubbleLife: 20,
    bubbleCount: 100,
};

HeroHeader.propTypes = {
    background: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bubbleLife: PropTypes.number,
    bubbleCount: PropTypes.number,
};

