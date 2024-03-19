import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";

import HomePage from "@/pages/home";
import CartPage from "@/pages/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
