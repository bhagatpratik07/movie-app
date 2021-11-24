import React, { useEffect, useState } from "react";
import "../../../node_modules/react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";
import "./MovieInfo.css";

export default function MovieInfo({ match }) {
  const [movies, setMovies] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState([]);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=8ff089a151d77dec860addce9ea143dd`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        // console.log(data);
      });
  }, [match.params.id]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=8ff089a151d77dec860addce9ea143dd`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieTrailer(data.results);
        // console.log(data);
      });
  }, [match.params.id]);
  return (
    <div>
      <div className="container">
        <img
          src={`https://image.tmdb.org/t/p/w185${movies.poster_path}`}
          alt="banner"
        />
        <div className="details">
          <h1 className="movie-title">{movies.original_title}</h1>
          <h3 className="genres">
            {movies.genres?.[0]?.name} {movies.genres?.[1]?.name}{" "}
            {movies.genres?.[2]?.name}
          </h3>
          <p className="tagline">{movies.tagline}</p>
          <h4 className="overview">{movies.overview}</h4>
          <button onClick={() => setOpen(true)} className="btn">
            Trailer
          </button>
        </div>
      </div>
      {movieTrailer && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={movieTrailer[0]?.key}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
