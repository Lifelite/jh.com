import NavBar from "../components/NavBar.jsx"
import "../styles/home.scss";
import {useState} from "react";
export const Home = () => {

    const [view, setView] = useState("home")

    return (
        <>
            <NavBar />
            <div className="viewport">

            </div>


        </>
    )
}