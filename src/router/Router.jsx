import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../pages/dashboard/Layout/Layout";
import { NewsCard } from "../pages/dashboard/News/NewsCard";
import { Weather } from "../pages/weather/Weather";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <NewsCard />,
      },
      {
        path: "/dashboard/news",
        element: <NewsCard />,
      },
      {
        path: "/dashboard/weather",
        element: <Weather />,
      },
    ],
  },
]);
