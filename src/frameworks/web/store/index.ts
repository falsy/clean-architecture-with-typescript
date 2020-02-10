import { createStore, combineReducers } from 'redux';
import Presenters from '@presenters/di';

const reducers = {
  board: Presenters.board.reducer(),
  session: Presenters.session.reducer()
};

export default createStore(combineReducers({ ...reducers }));