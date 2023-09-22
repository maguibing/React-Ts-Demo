import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/home';
import Login from './pages/login';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/login' />}></Route>
          <Route path='/login' >
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
