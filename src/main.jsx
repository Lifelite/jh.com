import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    RouterProvider
} from "react-router-dom";
import { inject } from '@vercel/analytics';
import router from "./routes/router.jsx";

inject();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
            <RouterProvider router={router}/>
    </React.StrictMode>
);