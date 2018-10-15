import React from 'react'
import {connect} from 'react-redux'

export function Feedback(props){
    if(props.winner != null){
        return(
            <div className="winnerFeedback">{props.winner} has won!</div>
        )
    }else{
        return(
            <div className ="feedback">{props.feedback}</div>
        )
    }
}

const mapStateToProps = (state) =>({
    feedback: state.feedback,
    winner:state.winner
})

export default connect(mapStateToProps)(Feedback)