export function managePresents(state, action){
    // action = {
    //     type: 'PRESENTS'
    // }

    let newState;

    switch (action.type){
        case 'INCREASE':
            newState = Object.assign({}, state, {numberOfPresents: state.numberOfPresents + 1})
            break;
        default:
            return state;
    }

    return newState;
}


