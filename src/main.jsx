
import {
    RouterProvider
} from "react-router-dom";
import { inject } from '@vercel/analytics';
import router from "./routes/router.jsx";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

inject();

createRoot(document.getElementById("root")).render(
    <StrictMode>
            <RouterProvider router={router}/>
    </StrictMode>
);