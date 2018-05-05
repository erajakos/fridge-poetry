const initialState = {
  currentCategory : null,
  isFetching : false,
  fetchFailure : false,
  categories : []
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return state;
    case 'FETCH_CATEGORIES_BEGIN':
      return Object.assign({}, state, {
        isFetching: true,
        fetchFailure: false
      });
    case 'FETCH_CATEGORIES_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        fetchFailure: false,
        categories: action.categories
      });
    case 'FETCH_CATEGORIES_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        fetchFailure: true
      });
    case 'SELECT_CATEGORY':
      return Object.assign({}, state, {
        currentCategory: action.category
      });
    default:
      return state
  }
}

export default category;