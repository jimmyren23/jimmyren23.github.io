import React from 'react';
import './App.css';
import MainPage from './pages/MainPage/Main.js'
import Poga from './pages/PogaPage/Poga.js'
import Tweets from './pages/TweetsPage/Tweets.js'
import Insta from './pages/InstaPage/Insta.js'
import Recipe from './pages/RecipePage/Recipe.js'
import Spotify from './pages/SpotifyPage/Spotify.js'
import Spotify from './pages/PathCal/PathCal.js'

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
          <Route path="/insta">
            <Insta />
          </Route>
          <Route path="/privacy-policy-path-cal">
            <PathCal />
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
