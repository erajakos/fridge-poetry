import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import '../styling/Word.css';

const Word = props => (
  <Draggable>
    <div className="word">
      <span>{ props.item }</span>
    </div>
  </Draggable>
);

Word.defaultProps = {
  item: 'anonymous'
};

Word.propTypes = {
  item: PropTypes.string
};

export default Word;