import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter, NavLink, Switch } from 'react-router-dom';
import Dogs from './views/Dogs';
import Dog from './views/Dog';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <header className="header-links">
            {/* <NavLink to="/" className="dogs-list-link">
              Home
            </NavLink> */}
          </header>

          <Switch>
            <Route exact path="/">
              <Dogs />
            </Route>
            <Route exact path="/dogs/:id">
              <Dog />
            </Route>
            {/* <Route exact path="/">
              <Header />
            </Route> */}
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
