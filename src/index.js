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
import SearchEvents from "./home/searchEvents";
import DescMusei from "./MuseiHome/descrizione-Musei";
import TerminiDUso from "./Privacy/TermsOfUse";
import ChangePassword from "./profile/changepassword";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <FuncProvider>
          <Home />
        </FuncProvider>
      </div>
    ),
  },
  {
    path: "/termsOfUse",
    element: (
      <div>
        <FuncProvider>
          <TerminiDUso />
        </FuncProvider>
      </div>
    ),
  },
  {
    path: "/descrizioneMusei",
    element: (
      <div>
        <FuncProvider>
          <DescMusei />
        </FuncProvider>
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
    path: "/museums",
    element: (
      <div>
        <FuncProvider>
          <ViewProvider>
            <FilterProvider>
              <SearchMuseum />
            </FilterProvider>
          </ViewProvider>
        </FuncProvider>
      </div>
    ),
  },
  {
    path: "/museums/:search",
    element: (
      <div>
        <FuncProvider>
          <ViewProvider>
            <FilterProvider>
              <SearchMuseum />
            </FilterProvider>
          </ViewProvider>
        </FuncProvider>
      </div>
    ),
  },
  {
    path: "/profile",
    element: (
      <div>
        <FuncProvider>
          <FilterProvider>
            <Profile />
          </FilterProvider>
        </FuncProvider>
      </div>
    ),
  },
  {
    path: "/edit-profile",
    element: (
      <div>
        <FuncProvider>
          <EditProfile />
        </FuncProvider>
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
  {
    path: "/events",
    element: (
      <div>
        <FuncProvider>
          <ViewProvider>
            <FilterProvider>
              <SearchEvents />
            </FilterProvider>
          </ViewProvider>
        </FuncProvider>
      </div>
    ),
  },
  {
    path: "/changepassword",
    element: (
      <div>
        <FuncProvider>
          <ChangePassword />
        </FuncProvider>
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
