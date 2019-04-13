import React, { Component } from 'react';
import Router from './router/router.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router />
        </header>
      </div>
    );
  }
}

export default App;
