import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/home";
import CartPage from "@/pages/cart";

const router = createBrowserRouter([
  {
    path: "/",
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
