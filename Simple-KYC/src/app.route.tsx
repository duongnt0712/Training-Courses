import { createBrowserRouter, Navigate } from "react-router-dom";
import pageRoutes from "./pages/pages.routes";

const appRouter = createBrowserRouter([
  {
    path: '',
    element: <Navigate to="/pages" replace />
  },
  ...pageRoutes
])

export default appRouter;