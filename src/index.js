import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import createReducer  from './store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';

Object.defineProperty(Array.prototype, 'makeChunk', {
  value: function(chunkSize) {
    var array = this;
    return [].concat.apply([],
      array.map(function(elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  }
});

const history = createBrowserHistory()
const store = createStore(createReducer())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
