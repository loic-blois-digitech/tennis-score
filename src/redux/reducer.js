// Le state
export const initialState = {
    // Le score de chacun des joueurs
    player1: 0,
    player2: 0,
    // Si il y a 40-40 quel joueur a l'avantage
    // On utilise null si pas d'avantage
    advantage: null,
    // Qui a gagné ?
    // Si la partie est en cours on utilise null
    winner: null,
    // La partie est-elle en cours ?
    playing: true
}

// le reducer contient la logique
// c'est une fonction qui reçoit le state et une action
export function reducer(state, action) {
    switch (action.type) {
        case "restart":
            return initialState
            break
        case "playPause":
            return {
                ...state,
                playing: !state.playing
            }
            break
        case "pointScored":
            const player = action.payload.player
            const otherPlayer = player === "player1" ? "player2" : "player1"
            if (state.winner) {
                return state
            }
            if (state.playing === false) {
                return state
            }
            const currentPlayerScore = state[player]
            if (currentPlayerScore <= 15) {
                return {...state, [player]: currentPlayerScore + 15}
            }
            if (currentPlayerScore === 30) {
                return {...state, [player]: 40}
            }
            // si le joueur est déjà à 40
            if (currentPlayerScore === 40) {
                // si l'autre joueur n'est pas à 40
                if (state[otherPlayer] !== 40) {
                    // le joueur a gagné !
                    return {...state, winner: player}
                }
                // si le joueur a l'avantage
                if (state.advantage === player) {
                    // le joueur a gagné !
                    return {...state, winner: player}
                }
                // si personne n'as l'avantage
                if (state.advantage === null) {
                    // le joueur a maintenant l'avantage !
                    return {...state, advantage: player}
                }
                // sinon c'est l'autre joueur qui a l'avantage
                // l'autre joueur perd l'avantage
                return {...state, advantage: null}
            }
            break
        default:
            return state
        break
    }
}