import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createRootReducer from './createRootReducer';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

export default ({ preloadedState } = {}) => {
  const middlewares = [reduxThunk];

  if (process.env.REACT_APP_USE_REDUX_LOGGER === 'true') {
    middlewares.push(reduxLogger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(createRootReducer(), preloadedState, composedEnhancers);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./createRootReducer', () => store.replaceReducer(createRootReducer()));
  }

  return store;
};
