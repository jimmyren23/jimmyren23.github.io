import React from 'react';
import './App.css';
import MainPage from './pages/Main.js'
import Poga from './pages/Poga.js'
import Tweets from './pages/Tweets.js'
import Insta from './pages/Insta.js'
import Recipe from './pages/Recipe.js'
import Spotify from './pages/Spotify.js'
import PathCal from './pages/PathCal';

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/path-cal" element={<PathCal />} />
          <Route path="/poga" element={<Poga />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="/insta" element={<Insta />} />
        </Routes>
      </Router>

  );
}

export default App;
