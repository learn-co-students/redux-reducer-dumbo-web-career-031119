export function manageFriends(state, action){

    // action = {
    //     type: 'ADD_FRIEND',
    //     friend: 'Chrome Boi'
    // }
    let newState;
    let friendArr;

    switch (action.type){
        case 'ADD_FRIEND':
            friendArr=[...state.friends, action.friend]
            newState = {friends: friendArr}
            break;
        case 'REMOVE_FRIEND':
            friendArr=state.friends.filter((friend)=>{
                return friend.id !== action.id
            })
            newState = {friends: friendArr}
            break;
        default:
            return state;
    }

    return newState;
}
