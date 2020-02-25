import { createStore, combineReducers } from 'redux';
import Presenters from '@adapters/presenters';

const reducers = {
  board: Presenters.board.reducer(),
  session: Presenters.session.reducer()
};

export default createStore(combineReducers({ ...reducers }));