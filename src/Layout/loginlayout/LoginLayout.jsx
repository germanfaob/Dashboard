import { Outlet } from "react-router";
import { PropTypes } from "prop-types";
import "./loginlayout.css";

export const LoginLayout = ({ children }) => {
  return (
    <div className="loginlayout-app">
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
