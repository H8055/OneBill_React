import { lazy } from "react";

// project imports
import MainLayout from "../layout/MainLayout";
import Loadable from "../components/Loadable";

// // render - dashboard
const ClientDashboard = Loadable(
  lazy(() => import("../pages/occupant/clientDashboard"))
);

// page routing
// const Home = Loadable(lazy(() => import("../pages/Dashboard")));
// const Tenants = Loadable(lazy(() => import("../pages/Tenants")));
// const Users = Loadable(lazy(() => import("../pages/Users")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <ClientDashboard />,
    },

    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <ClientDashboard />,
        },
      ],
    },
    {
      path: "meter",
      element: <ClientDashboard />,
    },
  ],
};

export default MainRoutes;
