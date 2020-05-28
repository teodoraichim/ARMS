import React from 'react'
import { render } from 'react-dom'
import './index.css';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import {bookReducer} from './reducers/reducer'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage: storage,
}
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
   
  const persistedReducer = persistReducer(persistConfig, bookReducer)
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(persistedReducer, enhancer)

let persistor = persistStore(store)

render(
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={<div />} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

