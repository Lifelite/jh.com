import "./style.scss"
import PropTypes from "prop-types";

export function HighlightCheckBox(props) {
    const {
        id,
        checked,
        children,
    } = props;

    return (
        <div className="highlight-checkbox">
            <label className="lns-checkbox">
                <input type="checkbox" id={id} checked={checked}/>
                <span>{children}</span>
            </label>
        </div>
    )
}

HighlightCheckBox.propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    children: PropTypes.node,
}