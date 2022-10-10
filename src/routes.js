import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { Header } from "./components/Home";
import Main from "./layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Header/>
            }
        ]
    }
]);

export default router;