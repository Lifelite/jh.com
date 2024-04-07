import "./styles/carousel-3d.scss"
import PropTypes from "prop-types";
export const Carousel3d = (props) => {
    const {
        children,
    } = props;




    return (
        <div className="carousel-3d">
            <div className="carousel-3d__body">
                <div className="carousel-3d__prev">
                    <i className="far far-angle-right" />
                </div>
                <div className="carousel-3d__slider">
                    {children}
                </div>
            </div>
        </div>
    )
}

Carousel3d.propTypes = {
    children: PropTypes.node
}