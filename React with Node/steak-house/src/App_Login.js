import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom'

class Login extends Component {
  onLogin() {
    //this.props.history.push('home');
    this.props.history.push({
      pathname: 'home',
      params: { userName: 'Karthik', city: 'Hyderabad'}
    });
  }
  render() {
    return (
      <div> Welcome to Login. Please Login
        <input type="button" value="Login " onClick={this.onLogin.bind(this)} />
      </div>
    );
  }
}

class Home extends Component {
  onButtonClick(){
    //debugger;
    this.props.history.goBack();
  }
  render() {
    const params = this.props.location.params;
    return (
      <div> Welcome to Home {params.userName}, {params.city}
        <input type="button" value="Go Back" onClick={this.onButtonClick.bind(this)} />
      </div>
    );
  }
}

class UnImplemented extends Component {
  render() {
    return (
      <div> Need to Implement. </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

export default App;