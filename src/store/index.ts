import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import swap from './swap';
import pools from './pools';
import user from './user';

const enhancers = [];
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension =
    ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension);
  }
}

const rootReducer = combineReducers({
  swap,
  user,
  pools,
});

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), composedEnhancers),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
