import React from 'react';
import PropTypes from 'prop-types';
import '../styling/Category.css';

const Category = props => (
  <div onClick={props.onClick} className="category { props.data.name }">
    <span>{ props.name }</span>
  </div>
);

Category.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
};

export default Category;