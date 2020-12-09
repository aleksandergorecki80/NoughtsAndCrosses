// Game reducer

const gameReducerDefaultState = {
    gameState: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    currentPlayer: '',
    isRun: false,
    isWinner: ''
};

const GameReducer = (state = gameReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_MARK':
            return {
                ...state,
                gameState: state.gameState.map((value, index) => {
                    if (index === action.id) {
                        return action.mark
                    } else {
                        return state.gameState[index]
                    }
                })
            }

        case 'RESET_GAME':
            return {
                ...state,
                gameState: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
            };
        case 'TURN_GAME_ON':
            return {
                ...state,
                isRun: true
            }
        case 'SELECT_PLAYER':
            return {
                ...state,
                currentPlayer: action.player
            }
        case 'SELECT_WINNER':
            return {
                ...state,
                isWinner: action.winner
            }
        default:
            return state;
    }
}

export default GameReducer;