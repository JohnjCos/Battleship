import {GROUP_COORDINATES, BATTLESHIP_SELECT,REDO_SHIPS,BEGIN_GAME, SHIP_HIT, SHIP_MISS, GRID_EXIT, MODE_CHANGE, REDIRECT_GAME} from './actions'

const initialState ={
    player1ships:[],
    newShip:[],
    shipSelection:{
        2:2,
        3:2
    },
    feedback:'select your battleships',
    mode:'start',
    player1Shots:[],
    redirect:{}
}



export const selectReducer = (state = initialState, action) => {

    function coordinateCheck(){
        for(let i =0;i<state.newShip.length;i++){
            const check = state.player1ships.map(ship =>ship.some(square => square.x ===state.newShip[i].x && square.y === state.newShip[i].y))
            if(check.includes(true) === true){
                return true
            }
        }
    }

    if(action.type===GROUP_COORDINATES){
        if(!state.newShip.some(square => square.x === action.coordinates.x && square.y ===action.coordinates.y)){
            return Object.assign({},state,{
                newShip: [...state.newShip, action.coordinates]
            })
        }
    }
    else if(action.type === REDO_SHIPS){
        return Object.assign({},state,initialState)
        
    }
    else if(action.type ===BATTLESHIP_SELECT){
        if(state.shipSelection["2"]===0 && state.shipSelection["3"]===1){
            if(state.newShip.length === 3 && state.shipSelection["3"] !== 0 && coordinateCheck()!==true){
                return Object.assign({},state,{
                    player1ships:[...state.player1ships,state.newShip],
                    shipSelection:{'2':state.shipSelection["2"],'3':state.shipSelection["3"]-1},
                    newShip:[],
                    mode:'ready'                    
                })
            }
        }
        else if(state.shipSelection["2"]===1 && state.shipSelection["3"]===0){
            if(state.newShip.length === 2 && state.shipSelection["2"] !== 0 && coordinateCheck()!==true){
                return Object.assign({},state,{
                    player1ships:[...state.player1ships,state.newShip],
                    shipSelection:{'2':state.shipSelection["2"]-1,'3':state.shipSelection["3"]},
                    newShip:[],
                    mode:'ready'                    
                })
            }
        }
        else if(state.newShip.length === 3 && state.shipSelection["3"] !== 0 && coordinateCheck()!==true){
            return Object.assign({},state,{
                player1ships:[...state.player1ships,state.newShip],
                shipSelection:{'2':state.shipSelection["2"],'3':state.shipSelection["3"]-1},
                feedback:`Please select ${state.shipSelection["2"]} ships with a length of 2 and ${state.shipSelection["3"]-1} with a length of 3`,
                newShip:[]
            })
        }else if(state.newShip.length ===2 && state.shipSelection["2"] !== 0 && coordinateCheck()!==true){
            return Object.assign({},state,{
                player1ships:[...state.player1ships,state.newShip],
                shipSelection:{'2':state.shipSelection["2"]-1,'3':state.shipSelection["3"] },
                feedback:`Please select ${state.shipSelection["2"]-1} ships with a length of 2 and ${state.shipSelection["3"]} with a length of 3`,
                newShip:[]
            })
        }else{
            return Object.assign({},state,{
                newShip:[],
                feedback:`Please select a valid length of 2 or 3`
            })
        }
    }
    else if(action.type === BEGIN_GAME){
        return Object.assign({},state,{
            feedback:'Time to destroy your enemy!',
            mode:'play'
        })
    }else if(action.type ===SHIP_HIT){
        return Object.assign({},state,{
            feedback:'Hit!',
            player1Hit:[action.coordinate]
        })
    }else if(action.type===SHIP_MISS){
        return Object.assign({},state,{
            feedback:'miss'
        })
    }else if(action.type===GRID_EXIT){
        return Object.assign({},state,{
            newShip:[]
        })
    }else if(action.type ===MODE_CHANGE){
        return Object.assign({},state,{
            mode:action.mode
        })
    }else if(action.type ===REDIRECT_GAME){
        if(action.mode ==='create'){
            return Object.assign({},state,{
                redirect:{gameName:action.gameName,mode:action.mode},
                mode:'selecting'
            })
        }else if(action.mode ==='join'){
            return Object.assign({},state,{
                redirect:{gameName:action.gameName,mode:action.mode},
                mode:'selecting'
            })
        }
        
    }
    return state
}