import "./profile.css";
import { FaHome, FaLinkedinIn, FaRegFileAlt, FaGithub } from "react-icons/fa"

export const Profile = () => {
  return (
    <div className="profile">
      <h1 className="profile__title">Perfil de usuario</h1>
      <div className="profile__description">
        <div className="profile__description-img"></div>
        <h2 className="profile__description-title">German Figueroa</h2>
        <p className="profile__description-text">Descubre más en:</p>
        <div className="profile__links">
          <ul className="profile__links-list">
            <li className="profile__links-item">
              <a className="profile__links-a" href="https://germadev.com/" target="_blank">
                <FaHome className="profile__links-icon"/>
              </a>
            </li>
            <li className="profile__links-item">
              <a className="profile__links-a" href="https://www.linkedin.com/in/germanfig/" target="_blank">
                <FaLinkedinIn className="profile__links-icon"/>
              </a>
            </li>
            <li className="profile__links-item">
              <a className="profile__links-a" href="https://github.com/germanfaob" target="_blank">
                <FaGithub className="profile__links-icon"/>
              </a>
            </li>
            <li className="profile__links-item">
              <a className="profile__links-a" href="../../resume/resume.pdf" target="_blank">
                <FaRegFileAlt className="profile__links-icon"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
