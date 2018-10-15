import React from 'react'
import './readMe.css'

export default function Readme (){
    return(
        <div className ='readMe'>
            <h4>How to play</h4>
            <p>you can create or join a game thats already made.</p>
            <p>Once in the game you can select your ships by clicking on a square</p>
            <p>and dragging your mouse to where you want the ship to stop.</p>
            <p>keep in mind this length can either be 2 or 3 squares.</p>
            <p>once you have selected all ships you can lock in your ships or redo them.</p>
            <p>once both players are ready the game has begun!</p>
            <p>at this point you can simply click a square to see if the enemy's ship is there.</p>
            <p>The game finishes once one player has destroyed all the others ships.</p>
        </div>
    )
}