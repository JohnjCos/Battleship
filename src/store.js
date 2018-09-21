import {createStore, applyMiddleware} from 'redux'
import {selectReducer} from './reducers'
import thunk from 'redux-thunk'

export default createStore(selectReducer,applyMiddleware(thunk))

