import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
  onLogin() {

    // https://www.npmjs.com/package/whatwg-fetch

    // backend request - get(retrieving), post(insert, updating, deleting)
    // fetch(url, options); => default is get request

    // simple get request
    // fetch('http://trainingkit.azurewebsites.net/api/Users/List')

      // post request for adding user
      /*var userInfo = new FormData();
      userInfo.append('username', 'Arjun');
      userInfo.append('age', '30');
      userInfo.append('password', '123');
      userInfo.append('city', 'Hyderabad');
      userInfo.append('gender', 'M');

      
     fetch('http://trainingkit.azurewebsites.net/api/Users/Add', { method: 'POST', body: userInfo}); */


    var userName = 'admin';
    var password = 'admin';

    var formData = new FormData();
        formData.append('username', userName);
        formData.append('password', password);


    fetch('http://trainingkit.azurewebsites.net/api/Users/CheckUserExists',{
      method:'POST',
      body: formData
    }).then(response => {
      debugger;
      if(response.status == 200){
        return response.json();
      } else {
        alert('Login Failed');
      }
    }).then(response => {
      debugger;
      if(response.data){
        //this.props.history.push('home');
        localStorage.setItem('age', 20);
        sessionStorage.setItem('gender', 'M');
        
        this.props.history.push({
          pathname: 'home',
          params: { userName: 'Karthik', city: 'Hyderabad'}
        });
      } else {
        alert('Invalid Credentials');
      }
    })
    .catch(error => {
      alert(error);
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