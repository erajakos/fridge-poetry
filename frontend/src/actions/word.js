const API_ENDPOINT = `${process.env.REACT_APP_API}/api/v1`;

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

    console.log(API_ENDPOINT);

    return fetch(`${API_ENDPOINT}/words/all`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          dispatch(fetchWordsSuccess(responseJson.words));
        } else {
          dispatch(fetchWordsError());
        }
      })
      .catch((error) => {
        dispatch(fetchWordsError());
      });
  }
};
