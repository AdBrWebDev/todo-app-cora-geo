import {createSlice} from '@reduxjs/toolkit';
import Axios from 'axios'

export const TodoListActions = createSlice({
    name: "todoList",
    initialState: {
        items: [], 
        server: "http://localhost:5000"
    },

    reducers: {

        handleSubmit: (state,action) => {
            Axios.post(`${state.server}/sendTodo`, {text: action.payload/*, userId: localStorage.getItem('userId'), name: localStorage.getItem('username')*/}).then((response) => {
                  console.log(response.data)
                  if(response.status === 200){
                    console.log("ok")
                    /*Axios.get(`${state.server}/getTodos`).then((response) => {
                        //this.state.push(...state.items, response.data)
                        //state.items = response.data
                        console.log(response.data)
                        console.log(response.status)
                    })*/
                  }
                  else{
                    console.log("Error")
                  }
                })
                console.log(state.items)
        },

        editData: (state, action) => {
            Axios.post(`${state.server}/editTodo`, {text: action.payload.text, id: action.payload.id, status: action.payload.status}).then((response) => {
                  console.log(response.data)
            })
        },

        handleDelete: (state, action) => {
            Axios.post(`${state.server}/deleteTodo`, {id: action.payload}).then((response) => {
                console.log(response.data)
              })
        }
    }}
);

export const {handleSubmit, handleDelete, editData} = TodoListActions.actions;

export default TodoListActions.reducer;