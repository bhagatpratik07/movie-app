import React from "react";
import MovieGenre from "../MovieRow/MovieGenre";
import MovieRow from "../MovieRow/MovieRow";
import { requests } from "../paths";
import Header from "../Header/Header.js";

export default function Movie() {
  return (
    <div>
      <Header />
      <MovieRow title={"Trending Movies"} route={requests.trendingMovies} />
      <MovieRow title={"Upcoming Movies"} route={requests.upcomingMovies} />
      <MovieRow title={"Popular Movies"} route={requests.popularMovies} />
      <MovieRow title={"Top Rated Movies"} route={requests.topRatedMovies} />
      <MovieGenre title={"Comedy Movies"} route={requests.comedyMovies} />
      <MovieGenre title={"Romantic Movies"} route={requests.romanticMovies} />
      <MovieGenre title={"Crime Movies"} route={requests.crimeMovies} />
      <MovieGenre title={"Documentaries"} route={requests.documentaryMovies} />
    </div>
  );
}
