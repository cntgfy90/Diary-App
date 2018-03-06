// ADD_ITEM action generator
export const addItem = ({ title, comments, id, selected }) => ({
    type: 'ADD_ITEM',
    title,
    comments,
    id,
    selected
});

// REMOVE_ITEM action generator
export const removeItem = ({ id } = {}) => ({
    type: 'REMOVE_ITEM',
    id
});

// SELECT_ITEM action generator
export const selectItem = ({ title, id } = {}) => ({
    type: 'SELECT_ITEM',
    title,
    id
});