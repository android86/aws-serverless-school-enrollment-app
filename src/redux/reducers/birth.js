export const birthDay = (state = {}, action) => {
    switch (action.type) {
        case 'ENTER_BIRTHDAY':
            let birth = action.birthday;

            return { ...state, birth };
        default:
            return state;
    }
};
