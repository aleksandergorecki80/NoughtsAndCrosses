// Game reducer

const gameReducerDefaultState = [' ',' ',' ',' ',' ',' ',' ',' ',' '];

const GameReducer = (state = gameReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_MARK':
            console.log(action.id)
            return state.map((value, index)=>{
                if(index === action.id){
                    return action.mark
                } else {
                    return state[index]
                }
            });
        case 'RESET':
            return gameReducerDefaultState;
        default: 
            return state;
    }
}

export default GameReducer;