import { RouteObject } from "react-router";
import User from "./user";
import UserKYC from "./kyc/kyc";
import PersonalInformation from "./personal-information/personal-information";

const userRoutes: RouteObject[] = [
  {
    path: 'user',
    element: <User />,
    children: [
      {
        path: ':id/pi',
        element: <PersonalInformation />
      },
      {
        path: ':id/kyc',
        element: <UserKYC />
      }
    ]
  }
]

export default userRoutes;