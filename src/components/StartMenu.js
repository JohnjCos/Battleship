import React from 'react'
import {connect} from 'react-redux'
import {modeChange} from '../actions'

function StartMenu(props){
    return(
        <div>
            <h3>Welcome to Battleship</h3>
            <button onClick={()=>{props.dispatch(modeChange('create'))}}>Create Game</button>
            <button onClick={()=>{props.dispatch(modeChange('join'))}}>Join Game</button>
        </div>
    )
}


export default connect()(StartMenu)