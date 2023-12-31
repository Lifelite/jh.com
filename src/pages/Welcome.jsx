import {Parallax} from "../components/Parallax/Parallax.jsx";
import '../styles/WelcomePage.scss'
import NavBar from "../components/NavBar.jsx";




export default function Welcome (props) {
    const {
        toolbar
    } = props



    return(
        <>
            <NavBar />
            <Parallax />
        </>
    )
}