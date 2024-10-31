import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@components/layouts/base-layout";
import Home from "@pages/home";
import Search from "@/views/pages/search";

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
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
