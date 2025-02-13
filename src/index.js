import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducers/index';
const store = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <App />
    </Provider>
);