import {API_BASE_URL} from './config'

export const MODE_CHANGE = 'MODE_CHANGE'
export const modeChange = (mode)=>({
    type:MODE_CHANGE,
    mode
})

export const BATTLESHIP_SELECT = 'BATTLESHIP_SELECT'
export const battleshipSelect =() => ({
    type: BATTLESHIP_SELECT
})

export const GROUP_COORDINATES = 'GROUP_COORDINATES'
export const groupCoordinates = (coordinates) => ({
    type: GROUP_COORDINATES,
    coordinates
})

export const REDO_SHIPS ='REDO_SHIPS'
export const redoShips = ()=>({
    type: REDO_SHIPS
})

async function waitForYourTurn(gameName,currentPlayer) {
    let isYourTurn= false
    while (!isYourTurn) {
        let playCheck;
        const gameResult = await fetch(`${API_BASE_URL}/${gameName}`)
        playCheck = await gameResult.json()
        if(playCheck.turn === currentPlayer || playCheck.checkWin !== null){
            return
        }
        await delay(1000)
    }
    return
}

export const HIT_CHECK = 'HIT_CHECK'
export const hitCheck =(Shots) =>(dispatch,getState) =>{
    return fetch(`${API_BASE_URL}/${getState().gameName}/${getState().player}`,{
        method:'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({Shots})
    })
    .then(res =>res.json())
    .then(result =>dispatch({
        type:HIT_CHECK,
        ...result
    }))
    .then(()=> dispatch(switchTurn()))
    .then(()=>waitForYourTurn(getState().gameName,getState().player))
    .then(()=> dispatch(switchTurn()))


}

export const SWITCH_TURN = "SWITCH_TURN"
export const switchTurn =()=>({
    type:SWITCH_TURN
})

export const GAME_ERROR = 'GAME_ERROR'
export const createGame =(gameName, password)=>dispatch =>{
    return fetch(`${API_BASE_URL}`,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({gameName,password})
    })
    .then(res => res.status === 200 ? res.json() : Promise.reject(res.err))
    .then(()=>dispatch(redirect(gameName,'player1')))
    .catch(() => dispatch({
            type:GAME_ERROR,
            error: 'Game name already exists'
        })
    )
}

async function delay(ms) {
    return new Promise(function(resolve,reject) {
        setTimeout(function() {
            resolve()
        }, ms)
    })
}

async function waitForBeginGame(gameName) {
    let isgameStarted= false
    while (!isgameStarted) {
        let playCheck;
        const gameResult = await fetch(`${API_BASE_URL}/${gameName}`)
        playCheck = await gameResult.json()
        if(playCheck.playtime === 'play'){
            return 
        }
        await delay(1000)
    }
    return
}

async function checkForWinner(gameName) {
    let isThereAWinner= false
    while (!isThereAWinner) {
        let winCheck;
        const gameResult = await fetch(`${API_BASE_URL}/${gameName}`)
        winCheck = await gameResult.json()
        if(await winCheck.checkWin !== null){
            return winCheck
        }
        await delay(5000)
    }
    return
}

export const BEGIN_GAME = 'BEGIN_GAME'
export const SET_WINNER ='SET_WINNER'
export const beginGame = (Ships) =>(dispatch,getState) =>{
    return fetch(`${API_BASE_URL}/${getState().gameName}/${getState().player}`,{
        method:'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({Ships})
    })
    .then(res => {
        return res.json()
    })
    .then(() => waitForBeginGame(getState().gameName))
    .then(() => dispatch({
        type: BEGIN_GAME
    }))
    .then(()=>waitForYourTurn(getState().gameName,getState().player))
    .then(()=> dispatch(switchTurn()))
    .then(()=> checkForWinner(getState().gameName))
    .then((result)=> dispatch({
        type: SET_WINNER,
        ...result
    }))
}


export const REDIRECT_GAME ='REDIRECT_GAME'
export const redirect = (gameName,player)=>({
    type:REDIRECT_GAME,
    gameName,
    player
})
