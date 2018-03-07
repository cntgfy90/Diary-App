export const singleComment = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
        const { text, id } = action;
            return {
                text,
                id
            };
        default:
            return state;
    }
}