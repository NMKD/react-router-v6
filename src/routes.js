import { createBrowserRouter, Navigate } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import UsersLayout from "./layouts/UsersLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import User from "./pages/User";
import UserIdLayout from "./layouts/UserIdLayout";
import Users from "./pages/Users";
import Edit from "./pages/Edit";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "users",
    element: <UsersLayout />,
    children: [
      {
        path: "",
        element: <Users />,
      },

      {
        path: ":userId",
        element: <UserLayout />,
        children: [
          {
            path: "",
            element: <UserIdLayout />,
            children: [
              {
                path: "",
                element: <User />,
              },
              {
                path: "profile",
                element: <Profile />,
              },
              {
                path: "edit",
                element: <Edit />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/users" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/users" />,
  },
]);

export default router;
