import {BlogCard} from "../../components/cards/BlogCard.jsx";
import "./styles/blog.scss"
import NavBar from "../../components/navbars/NavBar.jsx";

export default function Blog() {

    return (
        <>
            <NavBar/>
            <div className="blog">
                <div className="blog__title">

                </div>
                <BlogCard
                    title="The Blog is coming soon"
                    tags={["thing1", "thing2"]}
                    date="4/7/2024"

                >
                    Almost have the blog setup, please stay tuned for more!
                </BlogCard>
            </div>
        </>
    )


}