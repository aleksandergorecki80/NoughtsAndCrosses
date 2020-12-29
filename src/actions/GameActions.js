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

export const switchPlayer = (player) => {
    return {
        type: 'SWITCH_PLAYER',
        player
    }
}

export const selectWinner = (winner) => {
    return {
        type: 'SELECT_WINNER',
        winner
    }
}

export const guestPlayAs = (mark) => {
    return {
        type: 'GUEST_PLAY_AS',
        mark
    }
}