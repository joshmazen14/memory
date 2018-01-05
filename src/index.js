import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './app'
import MemoryApp from './reducers'
import './style/main.less'

let store = createStore(MemoryApp)


render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)