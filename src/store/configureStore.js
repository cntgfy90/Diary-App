import { createStore, combineReducers } from 'redux';
import { singleComment } from '../reducers/singleComment';
import { items } from '../reducers/items';
import { comments } from '../reducers/comments';

const diaryApp = combineReducers({
    singleComment,
    items,
    comments
});

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default () => {
    const store = createStore(diaryApp, reduxDevTools);
    return store;
}