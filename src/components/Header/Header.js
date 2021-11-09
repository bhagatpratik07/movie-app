import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function search() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(data);
    }
    searchValue && search();
  }, [searchValue]);
  return (
    <div>
      <form>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="Search..."
        />
        <input
          type="submit"
          onClick={(e) => setSearchValue(e.target.value)}
          value="Search"
        />
      </form>
      {movies &&
        movies.map((movie) => (
          <div key={movie.id}>
            <div key={movie.id} className="column">
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="images"
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt="movie-banner"
                />
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Header;

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=marvel&page=1&include_adult=false
