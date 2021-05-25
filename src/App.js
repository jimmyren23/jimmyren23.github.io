import React from 'react';
import './App.css';
import MainPage from './pages/Main.js'
import Poga from './pages/Poga.js'
import CSA from './pages/CSA.js'
import Tweets from './pages/Tweets.js'
import Insta from './pages/Insta.js'
import Recipe from './pages/Recipe.js'
import Spotify from './pages/Spotify.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/poga">
            <Poga />
          </Route>
          <Route path="/recipe">
            <Recipe />
          </Route>
          <Route path="/spotify">
            <Spotify />
          </Route>
          <Route path="/tweets">
            <Tweets />
          </Route>
          <Route path="/csa">
            <CSA />
          </Route>
          <Route path="/insta">
            <Insta />
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
