import React from 'react'
import RowSquare from './RowSquare'
import './row.css'

export default function Row({rowIndex,numberOfSquares}){
    return(
        <div className='rows'>
            {
                [...Array(numberOfSquares).keys()].map(square =>  <RowSquare key={`${rowIndex}-${square}`} rowIndex={rowIndex} columnIndex={square}/>)
            } 
        </div>
    )
}



