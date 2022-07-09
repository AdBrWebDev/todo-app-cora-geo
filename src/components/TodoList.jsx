// 4. Vytvor samostatny modul pre komponent TodoList a nasledne ho importuj v App.js.
import React from 'react';

class TodoList extends React.Component {
  randomColor = () => {
    const colors = ['primary', 'info', 'success', 'warning', 'danger'];
    const color = colors[Math.floor(Math.random() * 10)];
    return color;
  }
  
  render() {
      return (
        <ul className="mt-5">
          {this.props.items.map(item => (
              <li key={item.id} className={`notification is-${this.randomColor} row`}>
                <p className="col-8 col-sm-6 col-md-6 col-8 col-lg-8">{item.text}</p>
            <div className="col-4 col-sm-6 col-md-6 col-4 col-lg-4">
            <button className='button is-danger is-small' onClick={(e) => this.props.onClick(item)}>zmazať</button>
            <input type="checkbox" checked={this.props.checked} onChange={(e) => this.props.softDelete(item)} />
            </div>
            </li>
          ))}
        </ul>
      );
    }
  }

export default TodoList;