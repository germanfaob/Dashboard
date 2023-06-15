import { NavLink } from "react-router-dom";
import "./hero.css";

export const Hero = () => {
  return (
    <>
      <div className="hero__column column-left">
        <div className="hero__text">
          <span className="hero__text-bold">Mantente</span>
          <span className="hero__text-bold">Informado</span>
          <div className="hero__text-container">
            <p className="hero__text-description">
              Nuestro dashboard está diseñado para aquellos que buscan una
              experiencia informativa o de entretenimiento en un solo lugar. Con
              una interfaz visualmente cautivadora y amigable, nuestro dashboard
              te llevará en un viaje emocionante a través de contenido relevante
              y de actualidad.
            </p>
            <NavLink to="/login" className="hero__text-button">
              Empezar
            </NavLink>
          </div>
        </div>
      </div>
      <div className="hero__column column-right">
        <img
          className="hero__image"
          src="../../../../../images/dashboard.png"
          alt=""
        />
      </div>
    </>
  );
};
