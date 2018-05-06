export const fetchWordsBegin = () => ({
  type: 'FETCH_WORDS_BEGIN'
});

export const fetchWordsError = () => ({
  type: 'FETCH_WORDS_FAILURE'
});

export const fetchWordsSuccess = words => ({
  type: 'FETCH_WORDS_SUCCESS',
  words
});

export const clearWords = () => ({
  type: 'CLEAR_WORDS'
});

export const fetchWords = () => {
  return (dispatch, getState) => {
    dispatch(fetchWordsBegin());
    setTimeout(() => {
      dispatch(fetchWordsSuccess([
        {
          id: 1,
          name: 'Kissa'
        },
        {
          id: 2,
          name: 'Koira'
        },
        {
          id: 3,
          name: 'Papukaija'
        }
      ]));
    }, 1000);
  }
};
