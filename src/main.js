import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducers';
import todos from './todos';
import App from './App';
import {Provider} from 'react-redux';
const store = createStore(reducer, todos);


ReactDOM.render(

 <Provider store={store}>
    <App />
 </Provider>, document.getElementById('root'));