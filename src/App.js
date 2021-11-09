import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MovieInfo from "./components/MovieInfo/MovieInfo";

import Movie from "./components/Movies/Movie";

function App() {
  return (
    <div>
      {/* <h1>Movies App</h1> */}
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Movie} />
          <Route exact path="/movie/:id" component={MovieInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
