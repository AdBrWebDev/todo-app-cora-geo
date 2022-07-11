import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { handleSubmit } from '../store/redux/actions';

export function Form() {   
    const [value, setValue] = useState("")
    const dispatch = useDispatch();

    return(
        <div>
        <h3 className="title is-2 my-3">TODO</h3>
        <form onSubmit={(e) => {
          dispatch(handleSubmit(value)); 
          e.preventDefault();
          setValue("");
          }}>
          <div>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          </div>
          <input className="input is-rounded w-25 my-2"
            id="new-todo"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <div>
          <button className="button is-primary my-2">
            Add
          </button>
          </div>
        </form>
      </div>
    )}