import { NavLink } from "react-router-dom";
import "./hero.css";

export const Hero = () => {
  return (
    <>
      <div className="hero__column">
        <div className="hero__text">
          <span className="hero__text-bold">Mantente</span>
          <span className="hero__text-bold">Informado</span>
          <p className="hero__text-description">
            Tu dashboard con información en tiempo real
          </p>
          <NavLink to="/login" className="hero__text-button">
            Empezar
          </NavLink>
        </div>
      </div>
      <div className="hero__column"></div>
    </>
  );
};
