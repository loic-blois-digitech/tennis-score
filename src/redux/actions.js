// Les actions creators

// mettre en pause / reprendre le jeu
export const playPause = () => ({ type: "playPause" })

// redémarrer le jeu
export const restartGame = () => ({ type: "restart" })

// un joueur a marqué un point
// on passe en paramètre le joueur qui a marqué
export const pointScored = (player) => ({
    type: "pointScored",
    payload: { player: player }
})
