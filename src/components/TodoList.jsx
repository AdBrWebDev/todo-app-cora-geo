// 4. Vytvor samostatny modul pre komponent TodoList a nasledne ho importuj v App.js.
import React from 'react';

class TodoList extends React.Component {
  render() {
      return (
        <ul className="mt-5 w-75 mx-auto">
          {this.props.items.map(item => (
              <li key={item.id} className="notification is-info is-light shadow row">
                <p className="col-8 col-sm-6 col-md-6 col-8 col-lg-8">{item.text}</p>
            <div className="col-4 col-sm-6 col-md-6 col-4 col-lg-4">
            <button className='button is-danger is-small mr-3' onClick={(e) => this.props.onClick(item)}><i className="material-icons">delete</i></button>
            <input type="checkbox" checked={this.props.checked} onChange={(e) => this.props.softDelete(item)} />
            </div>
            </li>
          ))}
        </ul>
      );
    }
  }

export default TodoList;