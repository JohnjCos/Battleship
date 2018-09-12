import React from 'react'
import Row from './Row'


export default class Board extends React.Component{
    constructor(props){
        super(props)
        this.state={
            shipCoordinates:[]
        }
    }


    render(){


        let rows = 6;
        return(
            <div>
                <div>
                    {
                        [...Array(rows).keys()].map(row => <Row numberOfSquares={rows} rowIndex={row}/>)
                    }
                </div>
            </div>
        )
    }
}