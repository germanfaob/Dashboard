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
          <li className="nav__list-item">Noticias</li>
          <li className="nav__list-item">Meteorología</li>
          <li className="nav__list-item">Estrenos</li>
          <li className="nav__list-item">Deportes</li>
          <li className="nav__list-item">Astrología</li>
        </ul>
        <div className="nav__icons">
          <img
            className="nav__icons-item"
            src="../../../../images/profile.png"
            alt="Icono de perfil de usuario"
          />
          <img
            className="nav__icons-item"
            src="../../../../images/logout.png"
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
