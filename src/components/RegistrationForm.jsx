import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Axios from 'axios';
import {Link} from 'react-router-dom'

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }

        this.register = this.register.bind(this);
        this.setName = this.setName.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    setName = (e) => this.setState({ username: e.target.value })

    setPassword = (e) => this.setState({ password: e.target.value })

    register = async () => {
        if(this.state.username !== '' && this.state.password !== '') {
            Axios.post('http://localhost:5000/register', {username: this.state.username, password: this.state.password}).then(res => {
            console.log(res.status)
            if(res.status === 200) {
                alert("registrácia úspešná")
            }
            else{
                alert("registrácia zlyhala")
            }
            this.setState({username: '', password: ''})
        }
            )

        }else{
            alert("nevyplnené meno alebo heslo")
        }
    }

    render() {
        return(
            <Card className="w-50 container p-5 text-center shadow-lg">
                <Typography id="modal-modal-title" variant="h3" component="h2">Registračný formulár</Typography>
                <div>
                    <Typography id="modal-modal-title" variant="h5" component="h2">Meno</Typography>
                    <input type="text" className="input is-rounded my-2" value={this.state.name} onChange={this.setName} />
                </div>
                <div>
                    <Typography id="modal-modal-title" variant="h5" component="h2">Heslo</Typography>
                    <input type="password" className="input is-rounded my-2" value={this.state.password} onChange={this.setPassword} />
                </div>
                <div>
                <Link to="/">Spať na prihlásenie</Link>
                </div>
                <Button onClick={this.register} variant="contained" color="info">Register</Button>
            </Card>
        )
    }
}