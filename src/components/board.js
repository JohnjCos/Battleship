import React from 'react'
import Row from './Row'
import './board.css'
import {connect} from 'react-redux'
class Board extends React.Component{

    render(){
        let rows = 6;
        return(
            <div>
                <div >
                    {
                        [...Array(rows).keys()].map(row => <Row numberOfSquares={rows} rowIndex={row}/>)
                    }
                </div>
            </div>
        )
    }
}

export default connect()(Board)