import {createStore, applyMiddleware} from 'redux'
import {selectReducer} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

export default createStore(selectReducer,composeWithDevTools(applyMiddleware(thunk)))

