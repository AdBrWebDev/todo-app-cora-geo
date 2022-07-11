import {createSlice} from '@reduxjs/toolkit';

export const TodoListActions = createSlice({
    name: "todoList",
    initialState: {
        items: [],
    },
    reducers: {
        handleSubmit: (state,action) => {
              const newItem = {
                text: action.payload,
                id: Date.now(),
                done: false
              };

               state.items.push(newItem);
        },

        softDelete: (i) => {
            //console.log(i.id)
            this.setState({
                items: this.state.items.map(item => {
                    if(item.id !== i.id) return item;
                    return {
                        id: item.id,
                        text: item.text,
                        done: !item.checked,
                    }
                })
            })
        },

        handleDelete: (state, action) => {
            state.items.filter(i => i.id !== state.id)
            }
        }
    }
);

export const {handleSubmit, handleDelete ,softDelete} = TodoListActions.actions;

export default TodoListActions.reducer;