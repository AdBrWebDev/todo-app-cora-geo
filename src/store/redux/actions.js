import {createSlice} from '@reduxjs/toolkit';

export const TodoListActions = createSlice({
    name: "todoList",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {

        },
        removeItem: (state, action) => {

        }
    }
});

export const {addItem, removeItem} = TodoListActions.actions;

export default TodoListActions.reducer;