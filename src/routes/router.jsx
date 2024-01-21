import {createBrowserRouter} from "react-router-dom";
import Root from "./root.jsx";
import ErrorPage from "./error-page.jsx";
import {Personal} from "../pages/Personal.jsx";
import {Professional} from "../pages/Professional.jsx";
import {Contact} from "../pages/Contact.jsx";
import * as React from "react";
import {ThankYou} from "../pages/ThankYou.jsx";
import SpotifyJukebox from "../pages/SpotifyJukebox/SpotifyJukebox.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        // loader: rootLoader,
        // children: [
        //     {
        //         path: "/home",
        //         element: <Home />,
        //     }
        // ]
    },
    {
        path:"/personal",
        element:<Personal />,
        errorElement: <ErrorPage />
    },
    {
        path: "/professional",
        element: <Professional />,
        errorElement: <ErrorPage />
    },
    {
        path: "/contact-me",
        element: <Contact />,
        errorElement: <ErrorPage />
    },
    {
        path: "/thank-you",
        element: <ThankYou />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/jukebox",
        element: <SpotifyJukebox />,
        errorElement: <ErrorPage />,
    },
    // {
    //     path: "/experimental",
    //     element: <Experimental />
    // }
]);

export default router;