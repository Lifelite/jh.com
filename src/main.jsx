import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
//import "./styles/_base.scss";
import ErrorPage from "./routes/error-page.jsx";
import Root from "./routes/root.jsx";
import {Professional} from "./pages/Professional.jsx";
import {Personal} from "./pages/Personal.jsx";
import {Contact} from "./pages/Contact.jsx";
import { inject } from '@vercel/analytics';

inject();

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
        path: "/experimental",
        element: <></>
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
            <RouterProvider router={router}/>
    </React.StrictMode>
);