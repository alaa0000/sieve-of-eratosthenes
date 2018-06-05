import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers';
import rootEpic from '../middleware';

const epicMiddleware = createEpicMiddleware({
  dependencies: { ajax },
});

const configureStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);

export default configureStore;

