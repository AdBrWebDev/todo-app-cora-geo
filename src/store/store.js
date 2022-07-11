import {configureStore} from '@reduxjs/toolkit';
import {todoListReducer} from './redux/reducers/todoListReducer';

export default configureStore({
    reducer: {
        todoList:  todoListReducer,
    },
});