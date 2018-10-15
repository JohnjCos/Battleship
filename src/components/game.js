import React from 'react'
import Board from './board'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import InfoSection from './InfoSection'
import StartMenu from './StartMenu';
import CreateOrJoin from './CreateOrJoin';

function Game(props){
    console.log(props.winner)
    if(props.winner != null){
        return <InfoSection/>
    }
    if(props.mode === 'selecting' && props.player === 'player1'){
        return (
            <main>
                <header>
                    <h1>Battleship</h1>
                </header>
                <Redirect to={`/${props.gameName}/${props.player}`}/>
                <Board />
                <InfoSection />
            </main>
    )
    }else if(props.mode === 'selecting' && props.player === 'player2'){
        return (
            <main>
                <header>
                    <h1>Battleship</h1>
                </header>
                <Redirect to={`/${props.gameName}/${props.player}`}/>
                <Board />
                <InfoSection />
            </main>
        )
    }

    if(props.mode === 'start'){
        return(
            <div>
                <header>
                    <h1>Battleship</h1>
                </header>
                <StartMenu/>
                <InfoSection/>
            </div>
        )
    }else if(props.mode === 'create' || props.mode === 'join'){
        return(
            <div>
                <header>
                    <h1>Battleship</h1>
                </header>
                <CreateOrJoin/>
                <InfoSection/>
            </div>
        )
    }
    return(
        <main>
        <header>
            <h1>Battleship</h1>
        </header>
        <Board />
        <InfoSection />
    </main>
    )
}

const mapStateToProps= state =>({
    mode:state.mode,
    player:state.player,
    gameName:state.gameName,
    winner: state.winner
})

export default connect(mapStateToProps)(Game)