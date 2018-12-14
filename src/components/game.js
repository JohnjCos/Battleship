import React from 'react'
import Board from './board'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import InfoSection from './InfoSection'
import StartMenu from './StartMenu';
import CreateOrJoin from './CreateOrJoin';

function Game(props){

    if(props.loading){
        return(
            <div className='loading'>
                loading...
            </div>
        )
    }
    if(props.winner != null){
        return (
            <div className="container">
                <InfoSection/>
            </div>
        )
    }
    if(props.mode === 'selecting' && props.player === 'player1'){
        return (
            <main>
                <header>
                    <h1>Battleship</h1>
                </header>
                <Redirect to={`/${props.gameName}/${props.player}`}/>
                <div className="container">
                    <Board />
                    <InfoSection />
                </div>
            </main>
    )
    }else if(props.mode === 'selecting' && props.player === 'player2'){
        return (
            <main>
                <header>
                    <h1>Battleship</h1>
                </header>
                <Redirect to={`/${props.gameName}/${props.player}`}/>
                <div className="container">
                    <Board />
                    <InfoSection />
                </div>
            </main>
        )
    }

    if(props.mode === 'start'){
        return(
            <div>
                <header>
                    <h1>Battleship</h1>
                </header>
                <div className="container">
                    <StartMenu/>
                    <InfoSection/>
                </div>
            </div>
        )
    }else if(props.mode === 'Create' || props.mode === 'Join'){
        return(
            <div>
                <header>
                    <h1>Battleship</h1>
                </header>
                <div className="container">
                    <CreateOrJoin/>
                    <InfoSection/>
                </div>
            </div>
        )
    }
    return(
        <main>
        <header>
            <h1>Battleship</h1>
        </header>
        <div className="container">
            <Board />
            <InfoSection />
        </div>
    </main>
    )
}

const mapStateToProps= state =>({
    mode:state.mode,
    player:state.player,
    gameName:state.gameName,
    winner: state.winner,
    loading: state.loading
})

export default connect(mapStateToProps)(Game)