// Game reducer

const localData = JSON.parse(localStorage.getItem('game'));

const gameReducerDefaultState = {
    gameState: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    currentPlayer: '',
    isRun: false,
    isWinner: '',
    guestPlaysAs: ''
};

// const GameReducer = (state = gameReducerDefaultState, action) => {
const GameReducer = (state = localData ? localData : gameReducerDefaultState, action) => {
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
            };

        case 'RESET_GAME':
            return gameReducerDefaultState;
        case 'TURN_GAME_ON':
            return {
                ...state,
                isRun: true
            };
        case 'TURN_GAME_OFF':
            return {
                ...state,
                isRun: false
            };
        case 'SWITCH_PLAYER':
            return {
                ...state,
                currentPlayer: action.player
            };
        case 'SELECT_WINNER':
            return {
                ...state,
                isWinner: action.winner
            };
        case 'GUEST_PLAY_AS':
            return {
                ...state,
                guestPlaysAs: action.mark
            };
        default:
            return state;
    }
}

export default GameReducer;