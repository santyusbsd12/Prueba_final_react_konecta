import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import PersonList from "./Components/PersonList";
import HistoryActivity from "./Components/HistoryActivity";
import FavoriteQuotes from "./Components/FavoriteQuotes";

function App() {
  return (
    <Router>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/history" component={HistoryActivity} />
          <Route exact path="/personList" component={PersonList} />
          <Route exact path="/favoriteQuotes" component={FavoriteQuotes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;