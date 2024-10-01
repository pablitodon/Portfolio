import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Main from "../pages/Main/Main";
import App from "../App";
import Works from "../components/Works/Works";
import Contacts from "../components/Contacts/Contacts";


export const appRouter = createBrowserRouter([
    {
        element: <App />,
        errorElement: <div>Error</div>,
        children: [
            { path: "/", element: <Main /> },
            { path: "/about", element: <About /> },
            { path: "/myWorks", element: <Works /> },
            { path: "/contacts", element: <Contacts /> },
        ]
    },
]);