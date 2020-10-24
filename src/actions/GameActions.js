export const addMark = (id, mark) => ({
    type: 'ADD_MARK',
    id,
    mark
});

export const turnGameOn = () => ({
    type: 'TURN_GAME_ON',
});

export const resetGame = () => {
    return {
        type: 'RESET_GAME'
    }
}

export const selectPlayer = (player) => {
    return {
        type: 'SELECT_PLAYER',
        player
    }
}

// export const switchPlayer = (player) => {
//     return {
//         type: 'SWITCH_PLAYER',
//         player
//     }
// }