import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styling/Home.css';
import fridge from '../images/fridge.svg';

const Home = props => (
  <div id="home">
    <h1>Fridge poetry</h1>
    <div id="actions">
      <button onClick={() => props.startGame()}>Start game</button>
    </div>
    <img src={fridge} alt="Fridge" />
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
  startGame: () => push('/select-category')
}, dispatch);

export default connect(
  null, 
  mapDispatchToProps
)(Home);
