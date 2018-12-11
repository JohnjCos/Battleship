import {GROUP_COORDINATES, BATTLESHIP_SELECT,REDO_SHIPS, MODE_CHANGE,
            REDIRECT_GAME, HIT_CHECK, BEGIN_GAME, SWITCH_TURN, SET_WINNER, GAME_ERROR, REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE, END_GAME} from './actions'

const initialState ={
    playerships:[],
    newShip:[],
    shipSelection:{
        2:2,
        3:2
    },
    feedback:'',
    mode:'start',
    playerShots:[],
    player:'',
    loading:false,
    gameName: null,
    turn: null,
    winner:null,
    error:''
}

export const selectReducer = (state = initialState, action) => {

    function coordinateCheck(){
        for(let i =0;i<state.newShip.length;i++){
            const check = state.playerships.map(ship =>ship.some(square => 
                square.x ===state.newShip[i].x && square.y === state.newShip[i].y))
            if(check.includes(true) === true){
                return true
            }
        }
    }

    if(action.type===GROUP_COORDINATES){
        if(!state.newShip.some(square => 
            square.x === action.coordinates.x && square.y ===action.coordinates.y)){
            return Object.assign({},state,{
                newShip: [...state.newShip, action.coordinates]
            })
        }
    }else if(action.type === REDO_SHIPS){
        return Object.assign({},state,{
            playerships:[],
            newShip:[],
            shipSelection:{
                2:2,
                3:2
            },
            feedback:'Please select your ships',
            mode: 'selecting',
            error:''
        })
        
    }else if(action.type === REQUEST_START){
        return Object.assign({},state,{
            loading:true,
            error: null
        })
    }else if(action.type === REQUEST_SUCCESS){
        return Object.assign({},state,{
            loading:false,
            error: null
        })
    }else if(action.type === REQUEST_FAILURE){
        return Object.assign({},state,{
            error:action.error
        })
    }else if(action.type ===BATTLESHIP_SELECT){
        if(state.shipSelection["2"]===0 && state.shipSelection["3"]===1){
            if(state.newShip.length === 3 && state.shipSelection["3"] !== 0 && coordinateCheck()!==true){
                return Object.assign({},state,{
                    playerships:[...state.playerships,state.newShip],
                    shipSelection:{'2':state.shipSelection["2"],'3':state.shipSelection["3"]-1},
                    newShip:[],
                    mode:'ready'                    
                })
            }
            return Object.assign({},state,{
                newShip:[],
                feedback:`Please select a valid length of 2 or 3`
            })
            
        }else if(state.shipSelection["2"]===1 && state.shipSelection["3"]===0){
            if(state.newShip.length === 2 && state.shipSelection["2"] !== 0 && coordinateCheck()!==true){
                return Object.assign({},state,{
                    playerships:[...state.playerships,state.newShip],
                    shipSelection:{'2':state.shipSelection["2"]-1,'3':state.shipSelection["3"]},
                    newShip:[],
                    mode:'ready'                    
                })
            }
            return Object.assign({},state,{
                newShip:[],
                feedback:`Please select a valid length of 2 or 3`
            })
        }else if(state.newShip.length === 3 && state.shipSelection["3"] !== 0 && coordinateCheck()!==true){
            return Object.assign({},state,{
                playerships:[...state.playerships,state.newShip],
                shipSelection:{'2':state.shipSelection["2"],'3':state.shipSelection["3"]-1},
                feedback:`Please select ${state.shipSelection["2"]} ships with a length of 2 and 
                            ${state.shipSelection["3"]-1} with a length of 3`,
                newShip:[]
            })
        }else if(state.newShip.length ===2 && state.shipSelection["2"] !== 0 && coordinateCheck()!==true){
            return Object.assign({},state,{
                playerships:[...state.playerships,state.newShip],
                shipSelection:{'2':state.shipSelection["2"]-1,'3':state.shipSelection["3"] },
                feedback:`Please select ${state.shipSelection["2"]-1} ships with a length of 2 and 
                            ${state.shipSelection["3"]} with a length of 3`,
                newShip:[]
            })
        }else{
            return Object.assign({},state,{
                newShip:[],
                feedback:`Please select a valid length of 2 or 3`
            })
        }
    }else if(action.type === GAME_ERROR){
        return Object.assign({},state,{
            error:action.error
        })
    }else if(action.type ===HIT_CHECK){
        return Object.assign({},state,{
            feedback:action.checkHit.hitOrMiss,
            playerShots:[...state.playerShots,action.checkHit]
        })
    }else if(action.type ===MODE_CHANGE){
        return Object.assign({},state,{
            mode:action.mode
        })
    }else if(action.type ===REDIRECT_GAME){
        if(action.player ==='player1'){
            return Object.assign({},state,{
                player:action.player,
                mode:'selecting',
                gameName:action.gameName,
                feedback:'select your Battleships!',
                error:''
            })
        }else if(action.player ==='player2'){
            return Object.assign({},state,{
                player:action.player,
                mode:'selecting',
                gameName:action.gameName,
                feedback:'select your Battleships!',
                error:''
            })
        }
    }else if (action.type === BEGIN_GAME){
        return Object.assign({},state,{
            playerTurn: action.turn,
            mode:'play',
            feedback:"player1's turn",
            turn: null
        })
    }else if(action.type === SWITCH_TURN){
    let turn
        if(!state.turn){
            turn = state.player
        }
        else{
            turn = (state.turn === 'player1' ) ? 'player2' : 'player1'
        }
            return Object.assign({},state,{
                turn,
                feedback: `${turn}'s turn`
            })

    }else if(action.type === SET_WINNER){
        return Object.assign({},state,{
            winner:action.checkWin,
            feedback: `${state.winner} has won!` 
        })
    }else if(action.type === END_GAME){
        return Object.assign({},state,initialState)
    }
    return state
}