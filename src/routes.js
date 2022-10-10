import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import { Header } from "./components/Home";
import Quiztopics from "./components/Quiztopics";
import Statistics from "./components/Statistics";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Header />,
      },
      {
        path: "/home",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Header />,
      },
      {
        path: "/quiz/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: <Quiztopics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "statistics",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Statistics/>,
      },
    ],
  },
]);

export default router;