import React, { Component } from 'react';
import './styling/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <h1>Fridge poetry</h1>
      </MuiThemeProvider>
    );
  }
}

export default App;
