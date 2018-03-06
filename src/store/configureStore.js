import { createStore, combineReducers } from 'redux';
import { singleItem } from './singleItem';
import { items } from './items';

const diaryApp = combineReducers({
    singleItem,
    items
});


export default () => {
    const store = createStore(diaryApp);
}