import React from 'react'
import {connect} from 'react-redux'
import {modeChange} from '../actions'
import Readme from './Readme';
import './startMenu.css'

function StartMenu(props){
    return(
        <div className ='startMenu'>
            <h3>Welcome to the game of Battleship</h3>
            <button className='createButton' onClick={()=>{props.dispatch(modeChange('Create'))}}>Create Game</button>
            <button className='joinButton' onClick={()=>{props.dispatch(modeChange('Join'))}}>Join Game</button>
            <Readme/>
        </div>
    )
}


export default connect()(StartMenu)