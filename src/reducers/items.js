import { comments } from './comments';

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
            return state.map((item) => {
                return item.id === action.id ? {...item, selected: true}
                                             : {...item, selected: false}
            });
        case 'ADD_COMMENT':
        console.log(state)
            return state.map((item) => {
                if (item.selected) {
                    return {
                        ...item,
                        comments: item.comments.concat([action.text])
                    }
                } else {
                    return {...item}
                }
            });
        default:
            return state;
    }
};