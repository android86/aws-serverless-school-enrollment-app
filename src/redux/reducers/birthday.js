export default function birthdayReducer(state = {}, action) {
    let newState = {}

    switch (action.type) {
        case 'ADD_BIRTH_DAY':
            let day = action.day
            newState = { ...state, day }
            break;
        case 'ADD_BIRTH_MONTH':
            let month = action.month
            newState = { ...state, month }
            break;
        case 'ADD_BIRTH_YEAR':
            let year = action.year
            newState = { ...state, year }
            break;
        default:
            newState = state;
            break;
    }

    return newState;
}
