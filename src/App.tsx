import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "./navigation/Navigation"
import Home from "./home/home"
import Work from "./work/work"
import Dungeon from "./dungeon/dungeon"
import Important from "./important/important"
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
      <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/dungeon">
            <Dungeon />
          </Route>
          <Route path="/important">
            <Important />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
