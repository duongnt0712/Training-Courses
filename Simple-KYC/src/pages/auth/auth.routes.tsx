import { RouteObject } from "react-router";
import Auth from "./auth";
import ResetPassword from "./reset-password/reset-password";
import SignUp from "./sign-up/sign-up";
import Login from "./login/Login";

const authRoutes: RouteObject[] = [
  {
    path: 'auth',
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      },
      {
        path: 'reset-password',
        element: <ResetPassword />
      }
    ]
  }
]

export default authRoutes;