import PropTypes from "prop-types"
import "./styles/blog-card.scss"
import {useState} from "react";

export const BlogCard = (props) => {
    const {
        id,
        title,
        date,
        tags,
        bg_image,
        children,
    } = props;

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
    }

    const handleClose = (e) => {
        e.preventDefault()
        setClicked(false)
    }

    return (
        <>
            <div
                className={`blog-card ` + (clicked ? "flipped" : "")}

                style={{
                    backgroundImage: bg_image
                }}
                id={id}
            >
                <div className={'blog-card__clickable'} onClick={handleClick}></div>
                <div className="blog-card__front">
                    <h1>{title}</h1>
                    <p>{children}</p>
                    <div className="blog-card__date">
                        {date}
                    </div>
                    <div className="blog-card__tags">
                        {tags && tags.map((tag, index) =>
                            <div key={index} className="blog-card__tags__tag">{tag}</div>
                        )}
                    </div>
                </div>
                <div className="blog-card__back">
                    <button className="blog-card__back__exit" onClick={handleClose}>
                        X
                    </button>
                    <h1>{title}</h1>
                    <div className="blog-card__back__tags">
                        {tags && tags.map((tag, index) =>
                            <div key={index} className="blog-card__tags__tag">{tag}</div>
                        )}
                    </div>
                    <div className="blog-card__contents">{children}</div>
                </div>
            </div>
        </>
    )
}

BlogCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.array,
    bg_image: PropTypes.string,
    children: PropTypes.node,
}