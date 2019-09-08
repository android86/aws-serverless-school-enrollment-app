export default function birthdayReducer(state = {}, action) {
    let newState = {};

    switch (action.type) {
        case 'ADD_BIRTHDAY':
            let birthday = action.birthday;
            newState = { ...state, birthday };
            break;
        default:
            newState = state;
            break;
    }

    return newState;
}
