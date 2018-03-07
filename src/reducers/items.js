export const items = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newItem = {
                title: action.title,
                id: action.id,
                selected: action.selected,
                comments: action.comments
            };
            return [
                ...state,
                newItem
            ];
        case 'REMOVE_ITEM':
            return state.filter(({ id }) => id !== action.id);
        case 'SELECT_ITEM':
            state.map((item) => {
                if (item.id === action.id) {
                    item.selected = true;
                    return state;
                } else {
                    item.selected = false;
                    return state;
                }
            });
        default:
            return state;
    }
};