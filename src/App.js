import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import Dogs from './views/Dogs';
import Dog from './views/Dog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <header className="header-links"></header>

          <Switch>
            <Route exact path="/">
              <Dogs />
            </Route>
            <Route exact path="/dogs/:id">
              <Dog />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
