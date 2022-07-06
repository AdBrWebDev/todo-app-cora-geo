// 4. Vytvor samostatny modul pre komponent TodoList a nasledne ho importuj v App.js.
import React from 'react';

class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id} /*onClick={(e) => this.props.onClick(item)}*/>{item.text}
            <button onClick={(e) => this.props.onClick(item)}>zmazať</button>
            <input type="checkbox" checked={this.props.checked} onChange={(e) => this.props.softDelete(item)} />
            </li>
          ))}
        </ul>
      );
    }
  }

export default TodoList;