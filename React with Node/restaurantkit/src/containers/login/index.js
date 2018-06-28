import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
  onLogin() {
    //this.props.history.push('home');
    localStorage.setItem('age', 20);
    sessionStorage.setItem('gender', 'M');
    
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