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

        },

        softDelete: (state, action) => {
            Axios.post('http://localhost:5000/updateTodo', {text: action.payload, status: 1, date: new Date()}).then((response) => {
                console.log(response.data)
              })
        },

        hadleUpdate: (state, action) => {
            Axios.post('http://localhost:5000/updateTodo', {text: action.payload, status: 1, date: new Date()}).then((response) => {
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

export const {handleSubmit, handleDelete, softDelete, handleUpdate, editData} = TodoListActions.actions;

export default TodoListActions.reducer;