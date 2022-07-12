import {createSlice} from '@reduxjs/toolkit';
import Axios from 'axios'

const getData = async () => {
    await Axios.get('http://localhost:5000/getTodos').then((response) => {console.log(response.data)})
}

export const TodoListActions = createSlice({
    name: "todoList",
    initialState: {
        items: Axios.get('http://localhost:5000/getTodos').then((response) => console.log(response.data))
    },
    reducers: {

        handleSubmit: (state,action) => {
            const text = action.payload;
            console.log(text)

            Axios.post('http://localhost:5000/sendTodo', {text: action.payload}).then((response) => {
                  console.log(response.data)
                })
                //state.items.push(newItem);
            getData();
        },

        softDelete: (state, action) => {
            /*const softDelete = {
                id: i.id,
                status: 1,
                date: new Date()
            }*/

            Axios.post('http://localhost:5000/updateTodo', {text: action.payload, status: 1, date: new Date()}).then((response) => {
                console.log(response.data)
                console.log(action.payload)
              })
            /*this.setState({
                items: this.state.items.map(item => {
                    if(item.id !== i.id) return item;
                    return {
                        id: item.id,
                        text: item.text,
                        done: !item.checked,
                    }
                })
            })*/
        },

        handleDelete: (state, action) => {
            //state.items = state.items.filter(item => item.id !== action.payload);
        
            Axios.post('http://localhost:5000/deleteTodo', {id: action.payload}).then((response) => {
                console.log(response.data)
              })
        }
    }}
);

export const {handleSubmit, handleDelete ,softDelete} = TodoListActions.actions;

export default TodoListActions.reducer;