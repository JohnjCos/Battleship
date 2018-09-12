import React from 'react'
import Board from './board'
import {Provider} from 'react-redux'
import store from '../store'
import Feedback from './Feedback';

export default function Game(){

        return(
            <Provider store={store}>
            <main>
                <Board />
                <Feedback/>            
            </main>
            </Provider>
        )
}