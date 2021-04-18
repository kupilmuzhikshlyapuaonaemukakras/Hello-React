import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./header/Header"
import Home from "./header/navigation/menu/home/home"
import Work from "./header/navigation/menu/work/work"
import Dungeon from "./header/navigation/menu/dungeon/dungeon"
import Important from "./header/navigation/menu/important/important"
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
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
