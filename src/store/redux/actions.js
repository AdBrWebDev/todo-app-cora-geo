import {createSlice} from '@reduxjs/toolkit';
import Axios from 'axios'

/*const getData = () => {
    Axios.get('http://localhost:5000/getTodos').then((response) => {
        console.log(response.data); 
    })
}*/

export const TodoListActions = createSlice({
    name: "todoList",
    initialState: {
        items: [], /*Axios.get('http://localhost:5000/getTodos').then((response) => {
            console.log(response.data); 
            return response.data;
        })*/
    },

    reducers: {

        getData: () => {
            Axios.get('http://localhost:5000/getTodos').then((response) => {
                console.log(response.data); 
                this.state.items = response.data;
            })
            console.log(this.state.items)
        },

        handleSubmit: (state,action) => {
            Axios.post('http://localhost:5000/sendTodo', {text: action.payload}).then((response) => {
                  console.log(response.data)
                })
        },

        softDelete: (state, action) => {
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

export const {handleSubmit, handleDelete ,softDelete, getData} = TodoListActions.actions;

export default TodoListActions.reducer;