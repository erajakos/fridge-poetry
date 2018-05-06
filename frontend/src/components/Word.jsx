import React from 'react';
import PropTypes from 'prop-types';
import '../styling/Word.css';

const Word = props => (
  <div className="word">
    <span>{ props.item }</span>
  </div>
);

Word.defaultProps = {
  item: 'anonymous'
};

Word.propTypes = {
  item: PropTypes.string
};

export default Word;