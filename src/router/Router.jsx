import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../pages/dashboard/Layout/Layout";
import { NewsCard } from "../pages/dashboard/News/NewsCard";
import { Weather } from "../pages/weather/Weather";
import { MovieCard } from "../pages/movies/MovieCard";
import { SportCard } from "../pages/sports/SportCard";
import { AstronomyCard } from "../pages/astrology/AstronomyCard";
import { Home } from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {},
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
      {
        path: "/dashboard/movies",
        element: <MovieCard />,
      },
      {
        path: "/dashboard/sports",
        element: <SportCard />,
      },
      {
        path: "/dashboard/astronomy",
        element: <AstronomyCard />,
      },
    ],
  },
]);
