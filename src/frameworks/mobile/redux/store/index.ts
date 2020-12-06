import { createStore, combineReducers } from 'redux'
import reducers from '../reducers'

export default createStore(combineReducers({ ...reducers }))