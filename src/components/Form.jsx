import React from 'react';

export class Form extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    sendData = () => {
        this.props.parentCallBack(this.state.text) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state.text)
        this.setState({text: ''})
    }

    handleChange = (e) => { this.setState({text: e.target.value}) }
    render() {
    return(
        <div>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add
          </button>
        </form>
      </div>
    )}
}