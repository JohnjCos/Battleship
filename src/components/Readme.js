import React from 'react'
import './readMe.css'

export default function Readme (){
    return(
        <div className ='readMe'>
            <h4>How to play</h4>
            <p>From the front page you can either select to create or join a game.</p>
            <p>Once in a game you can select your ships by clicking on a square</p>
            <p>and dragging your mouse to where you want the ship's length to stop.</p>
            <p>Keep in mind this length can either be 2 or 3 squares.</p>
            <p>Once you have selected all ships you can lock in your ships or choose to redo them.</p>
            <p>When both players are ready the game can begin!</p>
            <p>At this point you can simply click a square to see if the enemy's ship is there.</p>
            <p>If you chose a location a enemy shit is located than its a hit, otherwhise you missed.</p>
            <p>The game finishes once one player has destroyed all the others ships.</p>
        </div>
    )
}