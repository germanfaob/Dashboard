import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./nav.css";
import "./dashboardcontainer.css";
import {
  FaNewspaper,
  FaCloudRain,
  FaFootballBall,
  FaFilm,
  FaRegMoon,
  FaDashcube,
  FaUser,
  FaRegShareSquare,
} from "react-icons/fa";

function DashboardLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 959);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className={`nav ${isMobile ? "mobile" : "desktop"}`}>
        <div className="nav__logo">
          <NavLink to="/dashboard" className="nav__logo-link">
            <FaDashcube className="nav__picture" alt="logo" />
          </NavLink>
        </div>
        <div className="list-container">
          <ul className="nav__list">
            <li className="nav__list-item">
              <NavLink to="/dashboard/news" className="nav__list-link">
                <FaNewspaper className="nav__list-icon" />
                {!isMobile && (
                  <span className="nav__list-text">Actualidad</span>
                )}
              </NavLink>
            </li>

            <li className="nav__list-item">
              <NavLink to="/dashboard/weather" className="nav__list-link">
                <FaCloudRain className="nav__list-icon" />
                {!isMobile && (
                  <span className="nav__list-text">Meteorología</span>
                )}
              </NavLink>
            </li>

            <li className="nav__list-item">
              <NavLink to="/dashboard/movies" className="nav__list-link">
                <FaFilm className="nav__list-icon" />
                {!isMobile && <span className="nav__list-text">Estrenos</span>}
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink to="/dashboard/sports" className="nav__list-link">
                <FaFootballBall className="nav__list-icon" />
                {!isMobile && <span className="nav__list-text">Deportes</span>}
              </NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink to="/dashboard/astrology" className="nav__list-link">
                <FaRegMoon className="nav__list-icon" />
                {!isMobile && (
                  <span className="nav__list-text">Astrología</span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav__icons">
          <NavLink to="/dashboard/profile" className="nav__icons-link">
            <FaUser className="nav__icons-item" alt="icono usuario" />
          </NavLink>
          <NavLink to="/dashboard/logout" className="nav__icons-link">
            <FaRegShareSquare className="nav__icons-item" alt="icono logout" />
          </NavLink>
        </div>
      </nav>

      <section className="content-container">
        {children}
        <Outlet />
      </section>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
  Outlet: PropTypes.node,
};

export default DashboardLayout;
