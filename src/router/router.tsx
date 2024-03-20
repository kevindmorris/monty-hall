import { createBrowserRouter } from "react-router-dom";
import { AboutPage, GamePage } from "../pages";
import Layout from "../components/layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <GamePage /> },
        { path: "about", element: <AboutPage /> }
      ]
    }
  ],
  { basename: "/monty-hall" }
);

export default router;
