import {createSlice} from '@reduxjs/toolkit';
import Axios from 'axios'

export const TodoListActions = createSlice({
    name: "todoList",
    initialState: {
        items: [], 
    },

    reducers: {

        handleSubmit: (state,action) => {
            Axios.post('http://localhost:5000/sendTodo', {text: action.payload}).then((response) => {
                  console.log(response.data)
                })
        },

        editData: (state, action) => {
            Axios.post('http://localhost:5000/editTodo', {text: action.payload.text, id: action.payload.id, status: action.payload.status}).then((response) => {
                  console.log(response.data)
            })
        },

        handleDelete: (state, action) => {
            Axios.post('http://localhost:5000/deleteTodo', {id: action.payload}).then((response) => {
                console.log(response.data)
              })
        }
    }}
);

export const {handleSubmit, handleDelete, editData} = TodoListActions.actions;

export default TodoListActions.reducer;