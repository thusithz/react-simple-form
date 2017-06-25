import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './component/login/login-form'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Email Component</h2>
        </div>
        <div className="App-intro">
            <LoginForm />
        </div>

      </div>
    );
  }
}

export default App;
