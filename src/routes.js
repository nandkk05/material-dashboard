import { useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);
}
