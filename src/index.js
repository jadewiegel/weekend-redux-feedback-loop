import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { Provider } from 'react-redux';


//reducers
const feelingNum = (state='', action) => {
    if(action.type === 'FEELING_NUM'){
        return action.payload;
    }
    return state;
}

const understandingNum = (state='', action) => {
    if(action.type === 'UNDERSTANDING_NUM'){
        return action.payload;
    }
    return state;
}

const supportNum = (state='', action) => {
    if(action.type === 'SUPPORT_NUM'){
        return action.payload;
    }
    return state;
}

const comments = (state='Enter comments', action) => {
    if(action.type === 'COMMENTS'){
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers(
        {
            feelingNum,
            understandingNum,
            supportNum,
            comments,
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));
registerServiceWorker();
