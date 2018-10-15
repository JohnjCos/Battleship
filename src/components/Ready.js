import React from 'react';
import {connect} from 'react-redux'
import {beginGame,redoShips} from '../actions'

function Ready(props){
    return(
        <div className="readySection">
            <h3>Begin?</h3>
            <button 
            className='ready'
            onClick={()=>{
                props.dispatch(beginGame(props.Ships))
                }}>Ready</button>
            <button className='redo' onClick={()=>props.dispatch(redoShips())}>Redo ships</button>
        </div>
    )
}

const mapStateToProps = state =>({
    Ships:state.playerships
})

export default connect(mapStateToProps)(Ready)