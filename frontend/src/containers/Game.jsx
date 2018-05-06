import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Vocabulary from '../components/Vocabulary';
import { fetchWords } from '../actions/word';
import '../styling/Game.css';

class Game extends Component {
  render() {
    return (
      <div id="game">
        <h1>Create some poetry...</h1>
        { this.props.isFetching ?
        <p>Fetching words...</p>
        :
        <Vocabulary words={this.props.words} />
        }
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchWords();
  }
}

Game.propTypes = {
  words: PropTypes.array,
  isFetching: PropTypes.bool,
  fetchFailure: PropTypes.bool,
  fetchWords: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    words: state.word.words,
    isFetching: state.word.isFetching,
    fetchFailure: state.word.fetchFailure
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWords: () => {
      dispatch(fetchWords());
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
