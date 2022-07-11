import {configureStore} from '@reduxjs/toolkit';
import todoListReducer from '../store/redux/actions';

export default configureStore({
    reducer: {
        todoList:  todoListReducer,
    },
});