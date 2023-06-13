import { Outlet } from "react-router";
import { PropTypes } from "prop-types";
import "./loginlayout.css";

export const LoginLayout = ({ children }) => {
  return (
    <div className="loginlayout-app">
      {children}
      <Outlet />
    </div>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node,
};
