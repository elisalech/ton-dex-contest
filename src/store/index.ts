import { combineReducers, createStore } from 'redux';

import swap from './swap';
import user from './user';

const rootReducer = combineReducers({
  swap,
  user,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
