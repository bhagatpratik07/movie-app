import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MovieRow.css";

export default function MovieRow({ title, route }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3${route}?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        // console.log(data);
      });
  }, [route]);
  return (
    <div>
      {/* title */}
      <h2 className="title">{title}</h2>
      <div className="row">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} className="column">
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="images"
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt="movie-banner"
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
