import React from 'react';
import Word from './Word';
import '../styling/Vocabulary.css';

const Vocabulary = props => (
  <div id="vocabulary">
    { props.words.map((word) => (
      <Word 
        item={word.item}
        key={word.id} />
    )) }
  </div>
);

export default Vocabulary;