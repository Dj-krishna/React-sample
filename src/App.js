import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/login';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
