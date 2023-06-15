import { useNavigate } from "react-router";
import "./login.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisable] = useState(false);

  const Logging = () => {
    if (!value.email || !value.password) {
      setErrorMsg("Faltan datos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisable(true);
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        setSubmitButtonDisable(false);
        navigate("/dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisable(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <>
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
        <form className="login__form">
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
              onChange={(event) =>
                setValue((prev) => ({ ...prev, email: event.target.value }))
              }
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
              onChange={(event) =>
                setValue((prev) => ({ ...prev, password: event.target.value }))
              }
            />
          </div>
          <b className="login__form-error">{errorMsg}</b>
        </form>
        <div className="login__form-footer">
          <button
            className="login__form-btn"
            type="submit"
            onClick={Logging}
            disabled={submitButtonDisabled}
          >
            Comenzar
          </button>
        </div>
      </div>
    </>
  );
};
