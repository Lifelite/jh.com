import PropTypes from "prop-types";
import '../styles/button.scss'

export default function Button(props) {
    const {
        children,
        onClick,
    } = props


    return (
        <button
            className="fancy"
            onClick={onClick}
        >
            <span className="button-top"></span>
            <span className="button-text">{children}</span>
            <span className="button-bottom"></span>
            <span className="button-bottom2"></span>
        </button>
    )
}

Button.defaultProps = {
    type: 'primary-button',
    onClick: () => Promise.resolve(),
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
}
