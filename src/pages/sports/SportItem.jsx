import "./sportitem.css";
import PropTypes from "prop-types";

export function SportItem({ title, description, urlToImage, publishedAt }) {
  let formattedDate = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(publishedAt));

  return (
    <div className="sport__card">
      <div className="sport__header">
        <h3 className="sport__header-title">{title}</h3>
      </div>
      <div className="sport__body">
        <img className="sport__body-img" src={urlToImage} alt={title} />
      </div>
      <div className="sport__footer">
        <p className="sport__footer-description">{description}</p>
        <span className="sport__footer-date">{formattedDate}</span>
      </div>
    </div>
  );
}

SportItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};
