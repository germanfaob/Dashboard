import { FaDashcube } from "react-icons/fa";
import "./nav.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="homenav">
      <div className="homelogo">
        <NavLink to="/">
          <FaDashcube className="homelogo__icon" alt="logo" />
        </NavLink>
        <NavLink to="/">
          <span className="homelogo__span">NewsNMore</span>
        </NavLink>
      </div>
      <div className="homelinks">
        <ul className="homelinks__list">
          <li className="homelinks__list-item">
            <NavLink to="/signup" className="homelinks__list-link">
              Registrarse
            </NavLink>
          </li>
          <li className="homelinks__list-item">
            <NavLink to="/login" className="homelinks__list-link">
              Entrar
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
