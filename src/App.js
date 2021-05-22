import React from 'react';
import './App.css';
import MainPage from './pages/Main.js'
import Poga from './pages/Poga.js'

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
            {/* <Poga/> */}
          </Route>
          <Route path="/dashboard">
            {/* <Dashboard /> */}
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
