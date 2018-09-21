import React from 'react';
import {connect} from 'react-redux'
import {beginGame,redoShips} from '../actions'
function Ready(props){



    return(
        <div>
            <h3>Begin?</h3>
            <button onClick={()=>props.dispatch(beginGame())}>Ready</button>
            <button onClick={()=>props.dispatch(redoShips())}>Redo ships</button>
        </div>
    )
}

export default connect()(Ready)