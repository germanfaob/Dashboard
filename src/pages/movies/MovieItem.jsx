import "./movieitem.css";
import PropTypes from "prop-types";

export function MovieItem({ poster_path, original_title, vote_average }) {
  return (
    <>
      <div className="movie__card">
        <div className="movie__top">
          <img
            className="movie__top-img"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
            loading="lazy"
          />
        </div>
        <div className="movie__bottom">
          <h2 className="movie__bottom-title">{original_title}</h2>
          <span className="movie__bottom-rating">Rating: {vote_average}</span>
        </div>
      </div>
    </>
  );
}
MovieItem.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  vote_average: PropTypes.number,
};
