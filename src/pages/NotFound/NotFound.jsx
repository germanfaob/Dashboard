// import { useRouteError } from "react-router";
import { Link, useRouteError } from "react-router-dom";
import "./notfound.css";

export const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
      <Link to="/" className="notfound__link">
        Volver al inicio
      </Link>
    </div>
  );
};
