import PropTypes from "prop-types";

export function RadioTextButton(props) {
    const {
        children
    } = props;


    return (
        <>
            <div className="radio-text-wrapper">
                {children}
            </div>
        </>
    )
}

RadioTextButton.propTypes = {
    children: PropTypes.node,
}