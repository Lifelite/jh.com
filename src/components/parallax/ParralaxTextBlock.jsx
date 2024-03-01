import cx from 'classnames'
import PropTypes from "prop-types";
import './styles/parallax-text-block.scss'
export const ParralaxTextBlock = (props) => {
    const {
        children,
        color,
        size,
        weight
    } = props;

    return (
        <span className={cx( color, size, weight )}>{children}</span>
    )
}

ParralaxTextBlock.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.string
}

ParralaxTextBlock.defaultProps = {
    color: "primary",
    size: "h6",
    weight: "bold"
}