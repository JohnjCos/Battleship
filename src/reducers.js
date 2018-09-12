import {GROUP_COORDINATES, BATTLESHIP_SELECT} from './actions'

const initialState ={
    player1ships:[],
    newShip:[],
    feedback:'select your battleships',
    shipSelection:{
        '2':2,
        '3':2
    }
}



export const selectReducer = (state = initialState, action) => {

    function coordinateCheck(){
        for(let i = 0; i < state.newShip.length;i++){
            const check = state.player1ships.map(ship =>ship.some(square => square.x ===state.newShip[i].x && square.y === state.newShip[i].y))
            return check[0]
        }
    }
    if(action.type===GROUP_COORDINATES){
        if(!state.newShip.some(square => square.x === action.coordinates.x && square.y ===action.coordinates.y)){
            return Object.assign({},state,{
                newShip: [...state.newShip, action.coordinates]
            })
        }
    }else if(action.type ===BATTLESHIP_SELECT){
        if(state.newShip.length === 3 && state.shipSelection["3"] !== 0 && coordinateCheck() !== true){
            console.log(coordinateCheck())
            return Object.assign({},state,{
                player1ships:[...state.player1ships,state.newShip],
                shipSelection:{'2':state.shipSelection["2"],'3':state.shipSelection["3"]-1},
                feedback:'select your battleships',
                newShip:[]
            })
        }else if(state.newShip.length ===2 && state.shipSelection["2"] !== 0 && coordinateCheck() !== true){
            return Object.assign({},state,{
                player1ships:[...state.player1ships,state.newShip],
                shipSelection:{'2':state.shipSelection["2"]-1,'3':state.shipSelection["3"] },
                feedback:'select your battleships',
                newShip:[]
            })
        }else{
            return Object.assign({},state,{
                newShip:[],
                feedback:`Please select ${state.shipSelection["2"]} ships with a length of 2 and ${state.shipSelection["3"]} with a length of 3`
            })
        }
    }
    return state
}