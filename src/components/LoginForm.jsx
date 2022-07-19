import React from 'react';
//import {useSelector, useDispatch} from 'react-redux';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import login from '../store/redux/actions';
//import { useNavigation } from 'react-router-dom'
import { useNavigate  } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }

        this.login = this.login.bind(this);
        this.setName = this.setName.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    login = async () => {
        if(this.state.username !== '' && this.state.password !== '') {
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        console.log("logged in")
        this.props.navigation('/todo')
        }else{
            alert("nevyplnené meno alebo heslo")
        }
    }

    setName = (e) => this.setState({ username: e.target.value })

    setPassword = (e) => this.setState({ password: e.target.value })

    render() {
        return (
            <Card className="w-50 container p-5 text-center shadow-lg">
                <Typography id="modal-modal-title" variant="h3" component="h2">Prihlasovací formulár</Typography>
                <div>
                    <Typography id="modal-modal-title" variant="h5" component="h2">Meno</Typography>
                    <input type="text" className="input is-rounded my-2" value={this.state.name} onChange={this.setName} />
                </div>
                <div>
                    <Typography id="modal-modal-title" variant="h5" component="h2">Heslo</Typography>
                    <input type="password" className="input is-rounded my-2" value={this.state.password} onChange={this.setPassword} />
                </div>
                <Button onClick={this.login} variant="contained" color="info">Log in</Button>
            </Card>
        )
    }
}

export default function RootFunction(props) {
    const navigation = useNavigate() // extract navigation prop here 

    return <LoginForm navigation={navigation} {...props}/> //pass to your component.

}