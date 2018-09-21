import React from 'react';
import {connect} from 'react-redux'
import {beginGame,redoShips, modeChange} from '../actions'
function Ready(props){



    return(
        <div>
            <h3>Begin?</h3>
            <button onClick={()=>{
                props.dispatch(beginGame(props.Ships))
                props.dispatch(modeChange('play'))
                }}>Ready</button>
            <button onClick={()=>props.dispatch(redoShips())}>Redo ships</button>
        </div>
    )
}

const mapStateToProps = state =>({
    Ships:state.playerships
})

export default connect(mapStateToProps)(Ready)