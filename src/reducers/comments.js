import { singleComment } from './singleComment';

export const comments = (state = [], action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                singleComment(undefined, action)
            ];
        default: 
            return state;
    }
}