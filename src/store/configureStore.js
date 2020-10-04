import { createStore, combineReducers } from 'redux';

import GameReducer from '../reducers/GameReducer';
// import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      game: GameReducer,
      // filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
