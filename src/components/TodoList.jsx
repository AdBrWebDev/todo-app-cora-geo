// 4. Vytvor samostatny modul pre komponent TodoList a nasledne ho importuj v App.js.
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {handleDelete, editData} from '../store/redux/actions';
import axios from 'axios'
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function TodoList(props){
  const [data, setData] = useState([])
  const [open, isOpen] = useState(false)
  const [status, changeStatus] = useState(0)
  const [nValue, setNValue] = useState('')
  console.log(data)
  //const items = useSelector(state => state.todoList.items);
  const dispatch = useDispatch();
  useEffect(async() => {
    try {
      const {data: response} = await axios.get('http://localhost:5000/getTodos');
      setData(response);
    }
    catch (error) {
      console.log(error.message);
    }
  }, [])

  const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }

  return(
    <>
        <ul className="mt-5 w-75 mx-auto">
          {data.map(item => (
              <li key={item.id} className={`notification is-light is-${(item.status === 0) ? "info" : (item.status === 1) ? "success" : "danger" } shadow`}>
                <div className="row">
                <p className="col-6 col-sm-6 col-md-6 col-8 col-lg-8 text-center my-auto">{item.text}</p>
            <div className="col-6 col-sm-6 col-md-6 col-xl4 col-lg-4 d-flex text-center">
            <Button variant="contained" color="info" className='mr-3' onClick={() => isOpen(true)}><i className="material-icons">edit</i></Button>
            <Button variant="contained" color="error" className='mr-3' onClick={(e) => {dispatch(handleDelete(item.id)); e.preventDefault()}}><i className="material-icons">delete</i></Button>
            </div>
            <Modal
            open={open}
  onClose={() => isOpen(!open)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Card className="w-50 container p-5 text-center shadow-lg" sx={style}>
    <Typography id="modal-modal-title" variant="h4" component="h2">
      {item.text}
    </Typography>
    <div>
    <input type="text" value={nValue} onChange={(e) => setNValue(e.target.value)} placeholder="Zmeni?? text..." className="input is-rounded mb-3 w-75 mx-auto text-center" />
    </div>
    <div>
    <InputLabel id="demo-simple-select-label">Zmeni?? status</InputLabel>
  <Select placeholder="Age"
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={status}
    defaultValue={0}
    label="Age"
    onChange={(e) => {changeStatus(e.target.value); console.log(e.target.value, item.id, item.text)}}
  >
    <MenuItem value={0}>Akt??vne</MenuItem>
    <MenuItem value={1}>Hotovo</MenuItem>
    <MenuItem value={2}>Ukon??en??</MenuItem>
  </Select>
  </div>
    <Button variant="outlined" className="mt-3" title="zmeni?? data" color="error" onClick={() => {
      dispatch(editData({ id: item.id, text: (nValue === '') ? item.text : nValue, status: status})); 
      console.log(item.id, (nValue === null) ? item.text : nValue , status)
      }}><i className="material-icons">edit</i></Button>
  </Card>
</Modal>
            </div>
            </li>
          ))}
        </ul>
      </>
  )
} 