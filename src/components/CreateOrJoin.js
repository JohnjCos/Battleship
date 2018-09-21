import React from 'react'
import {connect} from 'react-redux'
import {modeChange, createGame, redirect} from '../actions'
function CreateOrJoin(props){
    let gameName;
    let gamePassword;
    return (
        <div>
            <input placeholder='gameName' ref={name =>gameName = name}/>
            <input placeholder='password'ref={password =>gamePassword=password}/>
            <button onClick={()=>{
                if(props.mode === 'create'){
                    props.dispatch(createGame(gameName.value,gamePassword.value))
                    props.dispatch(redirect(gameName.value,props.mode))   
                }else if(props.mode === 'join'){
                    props.dispatch(redirect(gameName.value,props.mode))                
                }
                }}>{props.mode}</button>
            <button onClick={()=>props.dispatch(modeChange('start'))}>Cancel</button>
        </div>
    )
}

const mapStateToProps = state=>({
    mode: state.mode
})

export default connect(mapStateToProps)(CreateOrJoin)