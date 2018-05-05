import history from '../history' 

export const fetchCategoriesBegin = () => ({
  type: 'FETCH_CATEGORIES_BEGIN'
});

export const fetchCategoriesError = () => ({
  type: 'FETCH_CATEGORIES_FAILURE'
});

export const fetchCategoriesSuccess = categories => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  categories
});

export const selectCategoryAction = category => ({
  type: 'SELECT_CATEGORY',
  category
});

export const fetchCategories = () => {
  return (dispatch, getState) => {
    dispatch(fetchCategoriesBegin());
    setTimeout(() => {
      dispatch(fetchCategoriesSuccess([
        {
          id: 1,
          name: 'Kids'
        },
        {
          id: 2,
          name: 'Adults'
        },
        {
          id: 3,
          name: 'Horror'
        }
      ]));
    }, 1000);
  }
};

export const selectCategory = category => {
  return (dispatch, getState) => {
    dispatch(selectCategoryAction(category));
    history.push('/game');
  }
};