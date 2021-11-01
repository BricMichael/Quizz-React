import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import questionsReducer from '../reducer/questionsReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    question: questionsReducer,

})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));