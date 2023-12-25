import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./styles/_base.scss";
import ErrorPage from "./routes/error-page.jsx";

import Root from "./routes/root.jsx";
import {Home} from "./pages/Home.jsx";

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
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
            <RouterProvider router={router}/>
    </React.StrictMode>
);