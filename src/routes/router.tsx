import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@components/layouts/base-layout";
import Home from "@pages/home";
import Search from "@/views/pages/search";
import Product from "@/views/pages/product";
import ThankYou from "@/views/pages/thank-you";
import NotFound from "@/views/pages/errors/404";

export default function app() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/collections",
          element: <Search />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/thank-you",
          element: <ThankYou />,
        },
        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
