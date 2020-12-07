import { createStore, applyMiddleware } from  'redux';
import thunk from 'redux-thunk';

const initialState = {
  list: [],
  currentArtist: {},
  query: '',
  searchList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD':
      return {
        ...state,
      list: action.payload
      };

    case 'PICK_ARTIST':
      return {
        ...state,
        currentArtist: action.payload
      };

    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload
      };

    case 'SET_SEARCH_LIST':
      return {
        ...state,
        searchList: action.payload
      }

    default :
      return state;
  };
};

export const setList = list => ({
  type: 'LOAD',
  payload: list,
})

export const pickArtist = artist => ({
  type: 'PICK_ARTIST',
  payload: artist,
})

export const setQuery = query => ({
  type: 'SET_QUERY',
  payload: query,
})

export const setSearchList = searchList => ({
  type: 'SET_SEARCH_LIST',
  payload: searchList,
});

export const loadList = () => async (dispatch, getState) => {
  const list = await fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=4c253050b1788950960d40711fb0e7e8&format=json&limit=10')
    .then(result => result.json())
    .then(data => data.tracks.track);
  dispatch(setList(list));
}

export const loadArtist = (artist) => async (dispatch, getState) => {
  const artist2 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=4c253050b1788950960d40711fb0e7e8&format=json`)
    .then(result => result.json())
    .then(data => data.artist);
  dispatch(pickArtist(artist2));
}

export const loadSearchList = (query) => async (dispatch, getState) => {
  const searchList = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=4c253050b1788950960d40711fb0e7e8&format=json&limit=10`)
    .then(result => result.json())
    .then(data => data.results.trackmatches.track);
  dispatch(setSearchList(searchList));
}

export const store = createStore(reducer, applyMiddleware(thunk));
