import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const user = {
    login: true,
  };

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
