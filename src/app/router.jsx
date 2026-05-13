import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/common/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Profile from "../pages/dashboard/Profile";
import NotFound from "../pages/common/NotFound";
import ProtectedRoute from "../routes/ProtectedRoute";
import PublicRoute from "../routes/PublicRoute";
import { Input } from "antd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "profile", element: <Profile /> },
      { path: "dashboard/input", element: <Input /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
