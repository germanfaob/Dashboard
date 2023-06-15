import { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth} from "../../firebase/firebase"

export const SignUp = () => {
  

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [submitButtonDisabled, setSubmitButtonDisable] = useState(false);

  const register = ()=>{
    if(!value.name || !value.email || !value.password){
        setErrorMsg("Rellene todos los campos")
        return;
    }
    setErrorMsg("")
    setSubmitButtonDisable(true)
    createUserWithEmailAndPassword(auth,value.email,value.password)
    .then(async (res)=>{
        setSubmitButtonDisable(false);
        const user = res.user;
        await updateProfile(user,{
            displayName: value.name,
        });
        navigate("/dashboard")
    })
    .catch((err)=>{
        setSubmitButtonDisable(false)
        setErrorMsg(err.message)
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
          <h1 className="login__body-title">Registrarse gratis</h1>
        </div>
        <form className="login__form">
          <div className="login__form-group">
            <label className="login__form-label" htmlFor="email">
              Email:
            </label>
            <input
              className="login__form-input"
              type="email"
              placeholder="email@example.com"
              onChange={(event)=> setValue((prev)=>({...prev, email:event.target.value}))}
            />
          </div>
          <div className="login__form-group">
            <label className="login__form-label" htmlFor="name">
              Nombre:
            </label>
            <input
              className="login__form-input"
              type="text"
              placeholder="Nombre de usuario"
              onChange={(event)=> setValue((prev)=>({...prev, name:event.target.value}))}
            />
          </div>
          <div className="login__form-group">
            <label className="login__form-label" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="login__form-input"
              type="password"
              placeholder="********"
              onChange={(event)=> setValue((prev)=>({...prev, password:event.target.value}))}
            />
          </div>
            <b className="login__form-error">{errorMsg}</b>
        </form>
        <div className="login__form-footer">
          <button className="login__form-btn" onClick={register} disabled={submitButtonDisabled}>Registrar</button>
        </div>
      </div>
    </>
  );
};
