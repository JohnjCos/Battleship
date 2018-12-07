import React from 'react';
import {connect} from 'react-redux'
import {beginGame,redoShips} from '../actions'

class Ready extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            message:'Begin?'
        }
    }

    render(){

        const changeMessage =(message)=>{
            this.setState({
                message
            })
        }

        return(
            <div className="readySection">
                <h3>{this.state.message}</h3>
                <button 
                className='ready'
                onClick={()=>{
                    this.props.dispatch(beginGame(this.props.Ships))
                    changeMessage('waiting on other player')
                    }}>Ready</button>
                <button className='redo' onClick={()=>this.props.dispatch(redoShips())}>Redo ships</button>
            </div>
        )
    }

}

const mapStateToProps = state =>({
    Ships:state.playerships
})

export default connect(mapStateToProps)(Ready)