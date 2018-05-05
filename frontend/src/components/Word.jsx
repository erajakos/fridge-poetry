import React from 'react';
import PropTypes from 'prop-types';

const Word = props => (
  <div class="word">
    <span>{ props.name }</span>
  </div>
);

Word.defaultProps = {
  name: 'anonymous'
};

Word.propTypes = {
  name: PropTypes.string
};

export default Word;