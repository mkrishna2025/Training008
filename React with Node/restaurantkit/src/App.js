import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom'

import Login from './containers/login';
import Maps from './containers/maps';
import Home from './containers/home';
import CurrentLocation from './containers/currentlocation';
import UnImplemented from './containers/unimplemented';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/maps" component={Maps} />
        <Route path="/currentlocation" component={CurrentLocation} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

export default App;