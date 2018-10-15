import React from 'react'
import {connect} from 'react-redux'
import {modeChange, createGame, redirect} from '../actions'
import './form.css'
function CreateOrJoin(props){
    let gameName;
    let gamePassword;
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(props.mode === 'create'){
                props.dispatch(createGame(gameName.value,gamePassword.value))
            }else if(props.mode === 'join'){
                props.dispatch(redirect(gameName.value,'player2'))                
            }
            }}>
            <input placeholder='gameName' ref={name =>gameName = name}/>
            <input placeholder='password'ref={password =>gamePassword=password}/>
            <button className='startGame'>{props.mode}</button>
            <button className='cancel' onClick={()=>props.dispatch(modeChange('start'))}>Cancel</button>
        </form>
    )
}

const mapStateToProps = state=>({
    mode: state.mode
})

export default connect(mapStateToProps)(CreateOrJoin)