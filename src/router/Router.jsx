import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../pages/dashboard/Layout/Layout";
import { NewsCard } from "../pages/dashboard/News/NewsCard";
import { Weather } from "../pages/weather/Weather";
import { MovieCard } from "../pages/movies/MovieCard";
import { SportCard } from "../pages/sports/SportCard";
import { AstronomyCard } from "../pages/astrology/AstronomyCard";
import { Home } from "../pages/home/Home";
import { LoginLayout } from "../Layout/loginlayout/LoginLayout";
import { SignUp } from "../pages/signup/SignUp";
import { Login } from "../pages/login/Login";
import { NotFound } from "../pages/NotFound/NotFound";
import { Profile } from "../pages/profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    element: <LoginLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
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
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);
