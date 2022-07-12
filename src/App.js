import React from 'react';
import TodoList from './components/TodoList';
import { Form } from './components/Form';
import { FilterItems } from './components/FilterItems';
//import {getData} from './store/redux/actions';
import "bulma/css/bulma.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import "material-icons/iconfont/material-icons.css"
//import Axios from 'axios'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      copyItems: []
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

  filterItems = (filter) => {
    let items = this.state.items;
    switch (filter) {
      case 'all':
        return this.setState({ copyItems: items});
        case 'active':
          return this.setState({ copyItems: items.filter(item => !item.done)});
          case 'completed':
            return this.setState({ copyItems: items.filter(item => item.done)});
            default:
              return this.setState({ copyItems: items});
            }
          }
}

export default TodoApp;