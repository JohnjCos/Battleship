import React from 'react'
import {connect} from 'react-redux'
import {modeChange, createGame, joinGame} from '../actions'
import './form.css'
function CreateOrJoin(props){
    let gameName;
    let gamePassword;
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(props.mode === 'Create'){
                props.dispatch(createGame(gameName.value,gamePassword.value))
            }else if(props.mode === 'Join'){
                props.dispatch(joinGame(gameName.value,gamePassword.value))                
            }
            }}>
            <input placeholder=' Gamename' ref={name =>gameName = name}/>
            <input placeholder=' Password'ref={password =>gamePassword=password}/>
            <button className='startGame'>{props.mode}</button>
            <button className='cancel' onClick={()=>props.dispatch(modeChange('start'))}>Cancel</button>
        </form>
    )
}

const mapStateToProps = state=>({
    mode: state.mode
})

export default connect(mapStateToProps)(CreateOrJoin)