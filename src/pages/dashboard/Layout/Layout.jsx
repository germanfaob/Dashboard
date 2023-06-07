import PropTypes from "prop-types";
import "./nav.css";
import "./dashboardcontainer.css";

function DashboardLayout({ children }) {
  return (
    <>
      <nav className="nav">
        <div className="nav__logo">
          <img
            className="nav__picture"
            src="../../../../images/logo.svg"
            alt="Logo"
          />
        </div>
        <ul className="nav__list">
          <li className="nav__list-item">
            <img
              className="nav__list-icon"
              src="../../../../images/news.svg"
              alt="icono noticias"
            />
            Noticias
          </li>
          <li className="nav__list-item">
            <img
              className="nav__list-icon"
              src="../../../../images/weather.svg"
              alt="icono del tiempo"
            />
            Meteorología
          </li>
          <li className="nav__list-item">
            <img
              className="nav__list-icon"
              src="../../../../images/movie.svg"
              alt="icono películas"
            />
            Estrenos
          </li>
          <li className="nav__list-item">
            <img
              className="nav__list-icon"
              src="../../../../images/sports.svg"
              alt="icono deportes"
            />
            Deportes
          </li>
          <li className="nav__list-item">
            <img
              className="nav__list-icon"
              src="../../../../images/astrology.svg"
              alt="icono astrología"
            />
            Astrología
          </li>
        </ul>
        <div className="nav__icons">
          <img
            className="nav__icons-item"
            src="../../../../images/profile.svg"
            alt="Icono de perfil de usuario"
          />
          <img
            className="nav__icons-item"
            src="../../../../images/logout.svg"
            alt="Icono de salir"
          />
        </div>
      </nav>
      <section className="content-container">{children}</section>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
