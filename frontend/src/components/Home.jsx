import React, { Component } from 'react';
import fridge from '../images/fridge.svg';

const Home = props => (
    <div id="home">
        <h1>Fridge poetry</h1>
        <img src={fridge} alt="Fridge" />
    </div>
);

export default Home;