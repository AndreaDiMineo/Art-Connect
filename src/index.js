//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./login/login";
import SearchMuseum from "./searchmuseum/components/searchmuseum";
import { ViewProvider } from "./searchmuseum/hooks/view-context";
import { FilterProvider } from "./searchmuseum/hooks/filter-context";
import Profile from "./profile/profile";
import { FuncProvider } from "./login/context";
import RegisterNV from "./login/registerNV";
import Reset from "./login/resetpassword";
import MuseumProfile from "./museumprofile/components/museumprofile";
import EditProfile from "./profile/editprofile";
import Home from "./home/Home";
import DescMusei from "./MuseiHome/descrizione-Musei";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/descrizioneMusei",
    element: (
      <div>
        <DescMusei />
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
  {
    path: "/edit-profile",
    element: (
      <div>
        <EditProfile />
      </div>
    ),
  },
  {
    path: "/museumprofile",
    element: (
      <div>
        <FilterProvider>
          <MuseumProfile />
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
