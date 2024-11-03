import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@components/layouts/base-layout";
import Home from "@pages/home";
import Search from "@/views/pages/search";
import Product from "@/views/pages/product";
import ThankYou from "@/views/pages/thank-you";

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
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/thank-you",
          element: <ThankYou />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
