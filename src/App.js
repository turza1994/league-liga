import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home'
import NotFound from "./components/NotFound/NotFound";
import LeagueDetails from './components/LeagueDetails/LeagueDetails'

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/home'>
          <Home />
        </Route>

        <Route path='/leagueDetails/:id'>
          <LeagueDetails />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
