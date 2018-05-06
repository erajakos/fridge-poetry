import React from 'react';
import ReactDOM from 'react-dom';
import Word from '../components/Word';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Word />, div);
  ReactDOM.unmountComponentAtNode(div);
});
