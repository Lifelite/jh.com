import {createBrowserRouter} from "react-router-dom";
import Root from "./root.jsx";
import ErrorPage from "./error-page.jsx";
import {Personal} from "../pages/personal/Personal.jsx";
import {Professional} from "../pages/professional/Professional.jsx";
import {Contact} from "../pages/contact/Contact.jsx";
import {ThankYou} from "../pages/contact/ThankYou.jsx";
import SpotifyJukebox from "../pages/spotify-jukebox/SpotifyJukebox.jsx";
import {Y2KTextingTranslator} from "../pages/00s-texting-translator/Y2KTextingTranslator.jsx";
import {PalWorld} from "../pages/palworld/PalWorld.jsx";

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
    {
        path: "/y2k-texting-translator",
        element: <Y2KTextingTranslator />,
        errorElement: <ErrorPage />
    },
    {
        path: "/palworld",
        element: <PalWorld />,
        errorElement: <ErrorPage />
    }
    // {
    //     path: "/experimental",
    //     element: <Experimental />
    // }
]);

export default router;