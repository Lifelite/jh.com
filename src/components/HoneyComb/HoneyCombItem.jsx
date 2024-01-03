import PropTypes from "prop-types";

export function HoneyCombItem(props) {
    const {
        background,
        title,
        subtitle,
        style,
        id
    } = props

    return (
        <li className="honeycomb-item" id={id}>
            <div className="honeycomb-item-in">
                <a className="honeycomb-item-link" href="#">
                    <div className='honeycomb-item-image'
                         style={{
                             backgroundImage: background,
                             style
                    }}></div>
                    <h1 id={title} className="honeycomb-item-title">{title}</h1>
                    <p id={subtitle} className="honeycomb-item-subtitle">{subtitle}</p>
                </a>
            </div>
        </li>
    )
}

HoneyCombItem.defaultProps = {
    style: null,
}

HoneyCombItem.propTypes = {
    background: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    style: PropTypes.any,
    id: PropTypes.string,
}