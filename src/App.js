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
    </>
    );
  }
}

export default TodoApp;