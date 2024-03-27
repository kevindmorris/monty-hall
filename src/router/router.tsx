import Layout from "@/components/layout";
import { HomePage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <HomePage /> }]
    }
  ],
  { basename: "/monty-hall" }
);

export default router;
