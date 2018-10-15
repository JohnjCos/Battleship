import React from 'react'
import Row from './Row'
import {connect} from 'react-redux'
class Board extends React.Component{

    render(){
        let rows = 6;
        return(
            <div className='board'>
                <div >
                    {
                        [...Array(rows).keys()].map(row => <Row key={row.toString()} numberOfSquares={rows} rowIndex={row}/>)
                    }
                </div>
            </div>
        )
    }
}

export default connect()(Board)