import React from 'react'
import './square.css'
import {connect} from 'react-redux'
import {battleshipSelect, groupCoordinates, hitCheck} from '../actions'
class RowSquare extends React.Component {


    render(){

        const coordinateCheck = ()=>{
            const check = this.props.playerships.map(ship =>ship.some(square => square.x ===this.props.rowIndex && square.y === this.props.columnIndex))
            if(check.includes(true)){
                return 'O'
            }
        }

        const hasBeenSelectedCheck = ()=>{
            const check = this.props.playershots.some(shot => shot.coordinate.x ===this.props.rowIndex && shot.coordinate.y === this.props.columnIndex)
            if(check){
                return this.props.shortFeedback
            }
        }


        if(this.props.mode === 'selecting'){

                return(
                    <button 
                            key={this.props.rowIndex+'-'+this.props.columnIndex}
                            className="tile"
                            draggable="true" 
                            onDragStart={
                                () => this.props.dispatch(groupCoordinates({x:this.props.rowIndex, y:this.props.columnIndex}))
                            }
                            onDragOver={
                                () =>this.props.dispatch(groupCoordinates({x:this.props.rowIndex, y:this.props.columnIndex}))                            
                            }
                            onDragEnd={()=>this.props.dispatch(battleshipSelect())}
                            >
                    {coordinateCheck()}</button>
                )
        }else if(this.props.mode === 'play' && this.props.yourTurn){
            return(
                <button
                className="tile"
                key={this.props.rowIndex+'-'+this.props.columnIndex}                
                onClick={async ()=>{
                this.props.dispatch(hitCheck({x:this.props.rowIndex, y:this.props.columnIndex}));
            }
                }>{hasBeenSelectedCheck()}</button>
            )
        }else if(this.props.mode==='ready'){
            return(
                <button
                className="tile"
                >{coordinateCheck()}</button>
            )
        }else{
            return(
                <button
                className="tile"
                key={this.props.rowIndex+'-'+this.props.columnIndex}
                >{hasBeenSelectedCheck()}</button>
            )
        }
    }
}

const mapStatetoProps= state =>({
    mode: state.mode,
    playerships: state.playerships,
    feedback:state.checkHit,
    playershots:state.playerShots,
    shortFeedback: (state.checkHit.hitOrMiss === 'hit') ? 'X' : (state.checkHit.hitOrMiss === 'miss') ? 'M' : '',
    yourTurn: (state.player === state.turn)
    
})

export default connect(mapStatetoProps)(RowSquare)


