import { PropTypes } from "prop-types";
import "./astronomyitem.css";

export function AstronomyItem({
  imageNasa,
  titleImg,
  descriptionImg,
  dateImg,
}) {
  let formattedDate = new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateImg));

  return (
    <>
      <div className="astrology__img">
        <img className="astrology__img-item" alt={titleImg} src={imageNasa} />
      </div>
      <div className="astrology__texts">
        <h3 className="astrology__texts-title">{titleImg}</h3>
        <p className="astrology__texts-description">{descriptionImg}</p>
        <span className="astrology__texts-date">{formattedDate}</span>
      </div>
    </>
  );
}

AstronomyItem.propTypes = {
  titleImg: PropTypes.string.isRequired,
  descriptionImg: PropTypes.string.isRequired,
  dateImg: PropTypes.string.isRequired,
  imageNasa: PropTypes.string.isRequired,
};
