import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="row">
          <div className="col-6">
            column num1
          </div>

          <div className="col-6">
            <span>
              <i className="fas fa-home"/>
            </span>
          </div>

        </div>

      </div>
    );
  }
}

export default App;