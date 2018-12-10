import React from 'react'
import {connect} from 'react-redux'
import { endGame } from '../actions';

export function Feedback(props){
    if(props.winner != null){
        return(
            <div className='container'>
                <div className="winnerFeedback">{props.winner} has won!</div>
                <button className="closeGameButton" onClick ={()=>{props.dispatch(endGame())}}>Close Game</button>
            </div>
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