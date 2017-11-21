import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path={'/'} component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
