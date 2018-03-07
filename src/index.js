import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

import DiaryApp from './components/DiaryApp';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <DiaryApp />
    </Provider>,
    document.getElementById('root')
);
