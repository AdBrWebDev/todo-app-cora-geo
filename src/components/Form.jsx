import React from 'react';

export class Form extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
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
        <h3 className="title is-2 my-3">TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          </div>
          <input className="input is-rounded w-25 my-2"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <div>
          <button className="button is-primary my-2">
            Add
          </button>
          </div>
        </form>
      </div>
    )}
}