import {createStore} from 'redux'
import {selectReducer} from './reducers'

export default createStore(selectReducer)

