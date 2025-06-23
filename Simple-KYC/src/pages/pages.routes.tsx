import authRoutes from "./auth/auth.routes";
import HomeComponent from "./home/HomeComponent";
import Pages from "./pages";
import userRoutes from "./user/user.routes";

const pageRoutes = [
  {
    path: 'pages',
    element: <Pages />,
    children: [
      {
        path: 'home',
        element: <HomeComponent />
      },
      ...authRoutes,
      ...userRoutes
    ]
  }
]

export default pageRoutes;