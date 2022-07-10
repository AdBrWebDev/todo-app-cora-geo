import React from 'react';
import TodoList from './components/TodoList';
import { Form } from './components/Form';
import { FilterItems } from './components/FilterItems';
import "bulma/css/bulma.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import "material-icons/iconfont/material-icons.css"

class TodoApp extends React.Component {
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
          onClick={this.handleDelete}
          softDelete={this.softDelete}
        />
        </div>
    );
  }

  filterItems = (filter) => {
    let items = this.state.items;
    console.log(items)
    console.log(filter)
    switch (filter) {
      case 'all':
        return this.setState({ items: items});
        case 'active':
          return this.setState({ items: items.filter(item => item.done)});
          case 'completed':
            return this.setState({ items: items.filter(item => !item.done)});
            default:
              return this.setState({ items: items});
            }
          }

          softDelete = (i) => {
            console.log(i.id)
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
        }

  handleSubmit = (text) => {

    if (!text.length) {
      return;
    }

    const newItem = {
      text: text,
      id: Date.now(),
      done: false
    };

    this.setState(state => {
      // 2. Zapracuj pridanie polozky newItem do pola items.
      let items = state.items;
      items.push(newItem);
      return {
        items,
        text: '',
      };
    });
  }

  handleDelete = (item) => {
    this.setState(state => {
      // 3. Zapracuj zmazanie polozky item z pola items.
      let items = state.items;
      console.log(item);
      items = items.filter(i => i.id !== item.id);
      return {
        items
      }
    });
  }
}

export default TodoApp;