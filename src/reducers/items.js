import { singleItem } from './singleItem';

export const items = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                singleItem(undefined, action)
                // values: state.values.concat(action.item)
            ];
        case 'REMOVE_ITEM':
            const index = state.indexOf(action.title);
            return state.splice(index, 1);
        default:
            return state;
    }
};