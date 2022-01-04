import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter, NavLink, Switch } from 'react-router-dom';
import Dogs from './views/Dogs';
import Dog from './views/Dog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <header className="header-links">
            {/* <NavLink to="/home" className="home-link">
              Home
            </NavLink> */}
            <NavLink to="/dogs" className="dogs-list-link">
              Home
            </NavLink>
          </header>

          <Switch>
            <Route exact path="/dogs">
              <Dogs />
            </Route>
            <Route exact path="/dogs/:id">
              <Dog />
            </Route>
            <Route exact path="/" />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
