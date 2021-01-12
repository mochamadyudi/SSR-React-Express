import React from 'react'
import {hydrate} from 'react-dom'
import App from '../shared/App'
import  {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

hydrate(
  <Provider store={store}>
    <Router>
      <App name={window.___INITIAL_DATA___.name} _csrf={window.___INITIAL_DATA___._csrf}/>
    </Router>
  </Provider>
    ,
  document.getElementById('app'))