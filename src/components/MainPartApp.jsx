import React from 'react';
import {Form} from './Form';
import {FilterItems} from './FilterItems';
import TodoList from './TodoList';

export default class MainPartApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
        };
      }
    
      // 1. Prepis handleChange ako arrow function.
      handleChange = (e) => this.setState({ text: e.target.value });
    

    render() {
        return (
            <div className="container text-center card my-5 w-75 shadow mb-4">
        <Form
          handleSubmit={this.handleSubmit}
        />
        <FilterItems filterItems={this.filterItems} />
        <TodoList
          items={this.state.items}
          copyItems={this.state.copyItems}
          onClick={this.handleDelete}
          softDelete={this.softDelete}
        />
        </div>
        );
    }
}