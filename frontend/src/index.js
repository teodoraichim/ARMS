import React from 'react'
import { render } from 'react-dom'
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {bookReducer} from './reducers/reducer'
import App from './App'

const store = createStore(bookReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

