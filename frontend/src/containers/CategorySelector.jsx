import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCategory, fetchCategories } from '../actions/category';
import Category from '../components/Category';
import '../styling/SelectCategory.css';

class CategorySelector extends Component {
  render() {
    return (
      <div id="select-category">
        <h1>Select category</h1>

        { this.props.isFetching ?
        <p>Fetching categories...</p>
        :
        this.props.categories.map((category) => (
          <Category 
            name={category.name}
            id={category.id}
            onClick={() => this.props.onCategoryClick(category)} 
            key={category.id} />
        ))
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchData();
  }
}

CategorySelector.propTypes = {
  categories: PropTypes.array,
  isFetching: PropTypes.bool,
  fetchFailure: PropTypes.bool,
  onCategoryClick: PropTypes.func,
  fetchData: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.category.categories,
    isFetching: state.category.isFetching,
    fetchFailure: state.category.fetchFailure
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onCategoryClick: category => {
      dispatch(selectCategory(category));
    },
    fetchData: () => {
      dispatch(fetchCategories());
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorySelector);