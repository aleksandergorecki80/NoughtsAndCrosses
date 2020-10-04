// Game reducer

const gameReducerDefaultState = ['X','0','X','0','0','0','X','0','X'];

const GameReducer = (state = gameReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_MARK':
            return [

            ];
        case 'RESET':
            return gameReducerDefaultState;
        default: 
            return state;
    }
}

export default GameReducer;