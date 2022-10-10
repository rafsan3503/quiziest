import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { Header } from "./components/Home";
import Quiztopics from "./components/Quiztopics";
import Main from "./layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                loader: async() =>fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Header/>
            },
            {
                path: '/topics',
                element: <Header/>
            },
            {
                path: '/quiz/:id',
                loader: async ({ params }) => {
                  return fetch(
                    `https://openapi.programming-hero.com/api/quiz/${params.id}`
                  );  
                },
                element: <Quiztopics/>
            }
        ]
    }
]);

export default router;