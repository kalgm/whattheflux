import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import { makeAPICall } from './actions'

const store = configureStore()

store.dispatch(makeAPICall())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
