const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const mysql = require('mysql');
require('dotenv').config();

const dbcon = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todoapp',
})

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST'], 
    credentials: true
}));

app.post('/login', function(req, res){
    const {username, password} = req.body;
    console.log(req.body.username)
    dbcon.query(`SELECT * FROM users WHERE name = ? AND password = ?`, [username, password], (err, result) => {
        if(err) throw err;
        if(result.length > 0){
            res.send(result)
            console.log(result.json())
        }else{
            res.send('Nesprávne meno alebo e-mail')
        }
    }
    )
})

app.post('/sendTodo', (req, res) => {
    dbcon.query('INSERT INTO todos (id, text,status,date) VALUES (?,?,?,?)', ['', req.body.text, 0, new Date()], (err, result) => {
        res.send(result)
    })
})

app.post('/deleteTodo', (req, res) => {
    dbcon.query('DELETE FROM todos WHERE id = ?', [req.body.id], (err, result) => {
        res.send(result)
    })
})

app.post('/editTodo', (req, res) => {
    dbcon.query('UPDATE todos SET text = ?, status = ?, date = ? WHERE id = ?', [req.body.text, req.body.status, new Date(), req.body.id,], (err, result) => {
})
})

app.get('/getTodos', (req, res) => {
    dbcon.query('SELECT * FROM todos', (err, result) => {
        res.send(result)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })