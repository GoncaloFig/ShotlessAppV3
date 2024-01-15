import { ADD_PLAYER } from "./playerTypes"
import { REMOVE_PLAYER } from "./playerTypes"
import { CHANGE_PLAYER_NAME } from "./playerTypes"

const initialState = {
    players : [
        {
            id: 1,
            name: "Gonyfig"
        }
    ]
}

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLAYER: return {
            ...state,
            players: [...state.players, action.payload]
        }

        case REMOVE_PLAYER: return {
            ...state,
            players : state.players.filter((player) => player.id !== action.payload)
        }

        case CHANGE_PLAYER_NAME: 
            const {playerId, playerName} = action.payload
            //console.log("payload: "+ userId + " " + userNewName)
            const updatedPlayers = state.players.map(player => {
                if(player.id === playerId){
                    return {...player, name: playerName}
                }else {
                    return player
                }
            })

            return {
                ...state,
                players : updatedPlayers
            }

        default: return state
    }
}

export default playerReducer