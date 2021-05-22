import React from 'react';
import './App.css';
import MainPage from './pages/Main.js'
import Poga from './pages/Poga.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";




function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/about">
            <Poga />
          </Route>
          <Route path="/dashboard">
            {/* <Dashboard /> */}
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
