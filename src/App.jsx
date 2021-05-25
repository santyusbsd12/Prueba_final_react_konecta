import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import PersonList from "./Components/PersonList";
import FavoriteQuotes from "./Components/FavoriteQuotes";
import OtherQuotes from "./Components/OtherQuotes";

function App() {
  return (
    <Router>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/personList" component={PersonList} />
          <Route exact path="/favoriteQuotes" component={FavoriteQuotes} />
          <Route exact path="/otherQuotes" component={OtherQuotes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
