import React from "react";
import ReactDOM from "react-dom/client";
import { Home, Help, Offers, Search, Error, Menu, SignIn, Cart } from "./pages";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu/:id",
        element: <Menu />,
      },
    ],
    errorElement: <Error />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
