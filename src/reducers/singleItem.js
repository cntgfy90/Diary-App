const defaultSingleItemState = {
    title: '',
    comments: 0,
    id: 0,
    selected: false
};

export const singleItem = (state = defaultSingleItemState, action) => {
    switch(action.type) {
        case 'ADD__ITEM':
            const { title, comments, id, selected } = action;
            return {
                title,
                comments,
                id,
                selected
            };
        default:
            return state;
    }
};