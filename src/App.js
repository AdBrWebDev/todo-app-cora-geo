import React from 'react';
import "bulma/css/bulma.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "./index.css"
import "material-icons/iconfont/material-icons.css"
import LoginForm from './components/LoginForm';
import MainPartApp from './components/MainPartApp';
import {Routes, Route} from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm';

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
        <Route path="/" element={<LoginForm />} />
        <Route path="/todo" exact element={<MainPartApp />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </>
    );
  }
}

export default TodoApp;