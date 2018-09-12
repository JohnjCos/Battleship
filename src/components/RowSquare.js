import React from 'react'
import './square.css'
import {connect} from 'react-redux'
import {battleshipSelect, groupCoordinates} from '../actions'
class RowSquare extends React.Component {
render(){
        return(
            <button 
                    draggable="true" 
                    onDragStart={
                        () => this.props.dispatch(groupCoordinates({x:this.props.rowIndex, y:this.props.columnIndex}))
                    }
                    onDragOver={
                        () =>this.props.dispatch(groupCoordinates({x:this.props.rowIndex, y:this.props.columnIndex}))                            
                    }
                    onDragEnd={()=>this.props.dispatch(battleshipSelect())}>
            </button>
        )}
    }

export default connect()(RowSquare)