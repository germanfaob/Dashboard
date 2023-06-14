import { useState } from "react";
import "./signup.css";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router";
import { Alert } from "../../components/Alert";
import { NavLink } from "react-router-dom";

export const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

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
          <h1 className="login__body-title">Registrarse gratis</h1>
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
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="login__form-group">
            <label className="login__form-label" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="login__form-input"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
        </form>
        <div className="login__form-footer">
          <button className="login__form-btn">Registrar</button>
        </div>
      </div>
    </>
  );
};
