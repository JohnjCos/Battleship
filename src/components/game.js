import React from 'react'
import Board from './board'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import InfoSection from './InfoSection'
import StartMenu from './StartMenu';
import CreateOrJoin from './CreateOrJoin';
import socketSend from '../socketEvents'

function Game(props){
    if(props.redirect!==null && props.redirect.mode === 'create'){
        return (
            <main>
                <header>
                    <h1>Battleship</h1>
                </header>
                <Redirect to={`/${props.redirect.gameName}/player1`}/>
                <Board />
                <InfoSection />
            </main>
    )
    }else if(props.redirect!==null && props.redirect.mode === 'join'){
        return (
            <main>
                <header>
                    <h1>Battleship</h1>
                </header>
                <Redirect to={`/${props.redirect.gameName}/player2`}/>
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
            </div>
        )
    }
}

const mapStateToProps= state =>({
    mode:state.mode,
    redirect:state.redirect
})

export default connect(mapStateToProps)(Game)