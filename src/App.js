import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Nail from './containers/Nail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nail/>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
