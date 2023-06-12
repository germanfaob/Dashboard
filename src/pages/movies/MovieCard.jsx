import { useEffect, useState } from "react";
import axios from "axios";
import { MovieItem } from "./MovieItem";

import "./moviecard.css";

export function MovieCard() {
  const [data, setData] = useState([]);

  const MOVIE_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzVjMjQ0MTQ4NjU1Mjc1YjU3MDIwOTgyZTUyYmFkMiIsInN1YiI6IjYzZTBlY2U5MjNkMjc4MDA4NTJkNmRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cKA1BB7aKm4ab_yEjpiEED0d15UTflxexe9wjciuJlc";
  const headers = {
    Authorization: `Bearer ${MOVIE_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  };
  const NOW_PLAYING = "movie/now_playing?language=en-US";
  const MOVIE_URL = `https://api.themoviedb.org/3/${NOW_PLAYING}`;

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(MOVIE_URL, { headers: headers });
      setData(response.data.results);
    };
    getMovies();
    console.log(data);
  }, [MOVIE_URL, data, headers]);

  return (
    <div className="movie-container">
      <h2 className="movie__title">Últimos estrenos</h2>
      <div className="movies">
        {data.map((movie) => {
          return (
            <MovieItem
              key={movie.id}
              poster_path={movie.poster_path}
              original_title={movie.original_title}
              vote_average={movie.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
