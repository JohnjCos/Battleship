import React from 'react'
import './square.css'
import {connect} from 'react-redux'
import {battleshipSelect, groupCoordinates,shipHit,shipMiss} from '../actions'
class RowSquare extends React.Component {
    constructor(props){
        super(props)
        this.state={
            hitOrMiss:''
        }
    }


    render(){

        const coordinateCheck = ()=>{
            const check = this.props.playerships.map(ship =>ship.some(square => square.x ===this.props.rowIndex && square.y === this.props.columnIndex))
            if(check.includes(true) === true){
                return 'O'
            }
    }

    const HitOrMiss = ()=>{
            const check = this.props.player2ships.map(ship =>ship.some(square =>square.x===this.props.rowIndex && square.y===this.props.columnIndex))
        if(check.includes(true)===true){
            this.setState({
                hitOrMiss:'X'
            })
            
            return true
        }else{
            this.setState({
                hitOrMiss:'M'
            })
            return false
        }
    }

        if(this.props.mode === 'selecting'){

                return(
                    <button 
                            key={this.props.rowIndex+'-'+this.props.columnIndex}
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
        }else if(this.props.mode === 'ready'){
            return(
                <button
                key={this.props.rowIndex+'-'+this.props.columnIndex}
                onClick={()=>console.log('hello')}>{coordinateCheck()}</button>
            )
        }else if(this.props.mode === 'play'){
            return(
                <button 
                key={this.props.rowIndex+'-'+this.props.columnIndex}                
                onClick={()=>
                    {if(HitOrMiss()===true){
                        this.props.dispatch(shipHit({x:this.props.rowIndex, y:this.props.columnIndex}))
                    }else{
                        this.props.dispatch(shipMiss())
                    }}
                }>{this.state.hitOrMiss}</button>
            )
        }
    }
}

const mapStatetoProps= state =>({
    mode: state.mode,
    playerships: state.playerships,
    player2ships:state.player2Ships
})

export default connect(mapStatetoProps)(RowSquare)


