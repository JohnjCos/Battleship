import React from 'react'
import {connect} from 'react-redux'
import {modeChange} from '../actions'
import Readme from './Readme';
import './startMenu.css'

function StartMenu(props){
    return(
        <div className ='startMenu'>
            <h3>Welcome to Battleship</h3>
            <button className='createButton' onClick={()=>{props.dispatch(modeChange('create'))}}>Create Game</button>
            <button className='joinButton' onClick={()=>{props.dispatch(modeChange('join'))}}>Join Game</button>
            <Readme/>
        </div>
    )
}


export default connect()(StartMenu)