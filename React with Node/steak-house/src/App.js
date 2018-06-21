import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom'

import Login from './containers/login';
import Home from './containers/home';
import Contactus from './containers/contactus';
import UnImplemented from './containers/unimplemented';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contactus" component={Contactus} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

export default App;