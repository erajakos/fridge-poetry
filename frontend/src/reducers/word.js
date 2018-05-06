const initialState = {
  isFetching : false,
  fetchFailure : false,
  words : []
};

const word = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WORDS':
      return state;
    case 'FETCH_WORDS_BEGIN':
      return Object.assign({}, state, {
        isFetching: true,
        fetchFailure: false
      });
    case 'FETCH_WORDS_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        fetchFailure: false,
        words: action.words
      });
    case 'FETCH_WORDS_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        fetchFailure: true
      });
    case 'CLEAR_WORDS':
      return Object.assign({}, state, {
        words: [],
      });
    default:
      return state
  }
}

export default word;