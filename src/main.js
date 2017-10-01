import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
// import todos from './todos';
import App from './App';
import {Provider} from 'react-redux';




const loggerMW = store => next => action =>{
    console.log('-->', action);
    let result = next(action);
    console.log('store', store.getState());
    return result;
};

const store = createStore(reducer,applyMiddleware(loggerMW));

ReactDOM.render(

 <Provider store={store}>
    <App />
 </Provider>, document.getElementById('root'));