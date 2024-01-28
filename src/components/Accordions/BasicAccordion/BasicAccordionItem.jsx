import PropTypes from "prop-types";
import "./BasicAccordion.scss"

export function BasicAccordionItem(props) {
    const {
        children,
        id,
        title,
    } = props;


    return (
        <>
            <div className="accordion-item" id={id}>
                <a className="accordion-link" href={"#" + id}>
                    <div className="accordian-flex">
                        <h3>{title}</h3>
                        {/*<ul>*/}
                        {/*    <li>#Figma</li>*/}
                        {/*    <li>#Sketch</li>*/}
                        {/*    <li>#Adobe</li>*/}
                        {/*    <li>#Invision</li>*/}
                        {/*    <li>#Protopie</li>*/}
                        {/*</ul>*/}
                    </div>
                    <i className="accordian-icon ion-md-arrow-forward">+</i>
                    <i className="accordian-icon ion-md-arrow-down">-</i>
                </a>
                <div className="accordion-answer">
                    <p> {children}</p>
                </div>
                {/*<hr/>*/}
            </div>
        </>
    )
}

BasicAccordionItem.propTypes = {
    children: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string
};