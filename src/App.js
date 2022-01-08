import './App.css';
import { NavLink, Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import Dogs from './views/Dogs';
import Dog from './views/Dog';
import DogEdit from './views/Edit/DogEdit';
import Admin from './views/Admin/Admin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <header className="header-links">
            <NavLink to="/admin">Admin</NavLink>
          </header>

          <Switch>
            <Route exact path="/dogs/:id">
              <Dog />
            </Route>
            <Route exact path="/dogs/:id/edit">
              <DogEdit />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/">
              <Dogs />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
