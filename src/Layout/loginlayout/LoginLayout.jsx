import { Outlet } from "react-router";
import { PropTypes } from "prop-types";
import "./loginlayout.css";
import {FaUndoAlt} from "react-icons/fa"
import { NavLink } from "react-router-dom";

export const LoginLayout = ({ children }) => {
  return (
    <div className="loginlayout-app">
      <div className="loginlayout__alert">
      <NavLink><FaUndoAlt className="loginlayout__alert-icon" /></NavLink>
      <span className="loginlayout__alert-text">Usuario de prueba para iniciar sesión:<br/>email: <b>example@example.com</b><br/>password: <b>12345678</b></span>
      </div>
      <div className="loginlayout-container">
        {children}
        <Outlet />
      </div>
    </div>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node,
};
