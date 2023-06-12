import PropTypes from "prop-types";
import "./newsitem.css";

const NewsItem = ({ title, description, urlToImage, publishedAt }) => {
  let formattedDate = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(publishedAt));

  return (
    <div className="news__card">
      <div className="news__top">
        <img className="news__top-img" src={urlToImage} alt={title} />
      </div>
      <div className="news__bottom">
        <h3 className="news__bottom-title">{title}</h3>
        <p className="news__bottom-description">{description}</p>
        <span className="news__bottom-date">{formattedDate}</span>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};

export default NewsItem;
