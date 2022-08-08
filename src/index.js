import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoContainer from './components/TodoContainer';
import { Provider } from 'react-redux';
import store from './store';
import ContextProvider from './components/context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
    <Provider store={store}>
        <React.StrictMode>
            <TodoContainer />
        </React.StrictMode>
    </Provider>
    </ContextProvider>
);
