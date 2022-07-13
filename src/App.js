import React from 'react';
import "bulma/css/bulma.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "./index.css"
import "material-icons/iconfont/material-icons.css"
import LoginForm from './components/LoginForm';
import MainPartApp from './components/MainPartApp';
import {Routes, Route} from 'react-router-dom'
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
      <>
      <Routes>
        <Route path="/" exact element={<LoginForm />} />
        <Route path="/todo"  element={<MainPartApp />} />
      </Routes>
        {/*<div className="container text-center card my-5 w-75 shadow mb-4">
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
        <LoginForm />
    </div>*/}
    </>
    );
  }
}

export default TodoApp;