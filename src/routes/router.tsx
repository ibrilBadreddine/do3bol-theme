import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@components/layouts/base-layout";
import Home from "@pages/home";

export default function app() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <></>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
