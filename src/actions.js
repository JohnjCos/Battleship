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

export const SHIP_HIT = 'SHIP_HIT'
export const shipHit =(Shots) =>dispatch =>{
    return fetch(`${API_BASE_URL}`,{
        method:'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({Shots})
    })
    .then(res =>res.json())
}

export const SHIP_MISS = 'ship_MISS'
export const shipMiss = () =>({
    type:SHIP_MISS
})

export const createGame =(gameName, password)=>dispatch =>{
    return fetch(`${API_BASE_URL}`,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({gameName,password})
    })
    .then(res => res.json())
}
export const BEGIN_GAME = 'BEGIN_GAME'
export const beginGame = (Ships) =>dispatch =>{
    return fetch(`${API_BASE_URL}`,{
        method:'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({Ships})
    })
    .then(res =>res.json())
}

export const REDIRECT_GAME ='REDIRECT_GAME'
export const redirect = (gameName,mode)=>({
    type:REDIRECT_GAME,
    gameName,
    mode
})
