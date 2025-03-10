import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./pages/Checkout";
import SuccessCheckout from "./pages/SuccessCheckout";

const router = createBrowserRouter([
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/checkout/success",
    element: <SuccessCheckout />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
