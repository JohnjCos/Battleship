import React from 'react'
import RowSquare from './RowSquare'

export default function Row({rowIndex,numberOfSquares}){
    return(
        <div>
            {
                [...Array(numberOfSquares).keys()].map(square =>  <RowSquare  rowIndex={rowIndex} columnIndex={square}/>)
            } 
        </div>
    )
}



