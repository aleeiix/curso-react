import {StrictMode} from 'react';
import {render} from 'react-dom';

import { createStore, Store, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './store/reducer'

import App from './App';

const log = (store: any) => (next: any) => (action:any) => {
  console.log("Middleware triggered:", store, action);
  next(action);
}

const store: Store<ItemState, ItemAction> & {dispatch: DispatchType} = createStore(reducer, applyMiddleware(thunk, log));

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);