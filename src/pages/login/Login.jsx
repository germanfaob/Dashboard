import { useNavigate } from "react-router";
import { useAuth } from "../../context/authContext";
import "./login.css";
import { useState } from "react";
import { Alert } from "../../components/Alert";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  return (
    <>
      {error && <Alert message={error} />}
      <div className="login">
        <div className="login__header">
          <NavLink to="/signup" className="btn-left">
            Registrarse
          </NavLink>

          <NavLink to="/login" className="btn-right">
            Iniciar sesión
          </NavLink>
        </div>

        <div className="login__body">
          <h1 className="login__body-title">Iniciar sesión</h1>
        </div>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-group">
            <label className="login__form-label" htmlFor="email">
              Email:
            </label>
            <input
              className="login__form-input"
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
              onChange={handleChange}
            />
          </div>
          <div className="login__form-group">
            <label className="login__form-label" htmlFor="">
              Contraseña:
            </label>
            <input
              className="login__form-input"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="login__form-footer">
          <button className="login__form-btn" type="submit">
            Comenzar
          </button>
        </div>
      </div>
    </>
  );
};
