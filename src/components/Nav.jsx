import React from 'react';
import { useNavigate, useHistory } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout = () => {
        let history = useHistory()
        localStorage.clear();
        this.props.navigation('/');
        history.push('/');
    }

    render() {
        return(
            <nav>
        <div className="navbar-brand">
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <button className="button is-primary" onClick={this.logout}>
            <i className="material-icons">logout</i>
          </button>
        </div>
      </div>
    </div>
  </div>
            </nav>
        )
    }
}

export default function RootFunction(props) {
    const navigation = useNavigate()

    return <Nav navigation={navigation} {...props}/> 

}