import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./homepage/homepage";
import Login from "./login/login";
import SearchMuseum from "./searchmuseum/components/searchmuseum";
import { ViewProvider } from "./searchmuseum/hooks/view-context";
import { FilterProvider } from "./searchmuseum/hooks/filter-context";
import Profile from "./profile/profile";
import { FuncProvider } from "./login/context";
import RegisterNV from "./login/registerNV";
import Reset from "./login/resetpassword";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Homepage />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <FuncProvider>
          <Login />
        </FuncProvider>
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <FuncProvider>
          <RegisterNV />
        </FuncProvider>
      </div>
    ),
  },
  {
    path: "/passwordreset",
    element: (
      <div>
        <FuncProvider>
          <Reset />
        </FuncProvider>
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <ViewProvider>
          <FilterProvider>
            <SearchMuseum />
          </FilterProvider>
        </ViewProvider>
      </div>
    ),
  },
  {
    path: "/profile",
    element: (
      <div>
        <FilterProvider>
          <Profile />
        </FilterProvider>
      </div>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
