import PropTypes from "prop-types";
import "./styles/honey-comb.scss"

export function HoneyComb(props) {
    const {
        children,
        id
    } = props


    return (
        <div id={id} className="honeycomb">
            <ul className="honeycomb-grid">
                {children}
            </ul>
        </div>


)
}

HoneyComb.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string
}