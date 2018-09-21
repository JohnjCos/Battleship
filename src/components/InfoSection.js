import React from 'react'
import Feedback from './Feedback'
import Ready from './Ready'
import {connect} from 'react-redux'
function InfoSection(props){

    if(props.mode === 'ready'){
        return(
            <div>
                <Ready/>
            </div>
        )
    }else{
        return(
            <div>
                <Feedback/>
            </div>
        )
    } 
}

const mapStateToProps = state =>({
    mode:state.mode
})

export default connect(mapStateToProps)(InfoSection)