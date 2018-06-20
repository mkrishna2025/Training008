import React, { Component } from 'react';
import './home.css';
import MasterPage from '../../components/masterpage';

export default class Home extends Component {
  onButtonClick(){
    //debugger;
    this.props.history.goBack();
  }
  render() {
    const params = this.props.location.params;
    return (
      <MasterPage> Welcome to Home {params.userName}, {params.city}
        <input type="button" value="Go Back" onClick={this.onButtonClick.bind(this)} />
      </MasterPage>
    );
  }
}