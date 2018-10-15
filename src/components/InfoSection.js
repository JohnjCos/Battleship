import React from 'react'
import Feedback from './Feedback'
import Ready from './Ready'
import {connect} from 'react-redux'
import './infoSection.css'
function InfoSection(props){

    if(props.mode === 'ready'){
        return(
            <div>
                <Ready/>
            </div>
        )
    }
        return(
            <div>
                <Feedback/>
                <span className='error'>{props.error}</span>
            </div>
        )
    } 


const mapStateToProps = state =>({
    mode:state.mode,
    yourTurn: (state.player === state.turn),
    error:state.error
    
})

export default connect(mapStateToProps)(InfoSection)








