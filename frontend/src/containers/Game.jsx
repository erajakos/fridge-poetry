import React, { Component } from 'react';
import Fridge from '../components/Fridge';
import Vocabulary from '../components/Vocabulary';

class Game extends Component {
  render() {
    return (
      <div id="game">
        <p>Game view</p>
        <Fridge />
        <Vocabulary />
      </div>
    )
  }
}

export default Game;