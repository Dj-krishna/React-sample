import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Components/login";
import Home from "./Components/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
