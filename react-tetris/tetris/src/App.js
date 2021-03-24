import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Tetris } from "./components/Tetris";
import { Homepage } from "./Homepage";

export const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/tetris">
          <Tetris />
        </Route>
      </Switch>
    </Router>
  </div>
);
