const express = require('express')
const mongoose = require('mongoose') // mongoose is used of the use of mongo db for connection, declare mongo model and queries

const morgan = require('morgan') // login console
const bodyParse = require('body-parser') // parse the request incoming bodies

// mongoose.connect('mongodb://localhost:27017/nxtrestro', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect('mongodb+srv://surendrareddyk257:password6969@cluster0.7rcugnx.mongodb.net', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

const usersRoute = require('./app/routes/usersRoute')
const menuRoute = require('./app/routes/menuRoute')

db.on('error',(err)=> {
    console.log(err);
})

db.once('open', ()=>{
    console.log("Database Connection Established!");
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())


// to handle CORS policy
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// to run with an IP address
// app.get('/', function(req, res){
//     let ipAddress = req.socket.remoteAddress;
//     console.log(ipAddress);
//     res.send(ipAddress);
// })

// run with port
const PORT = process.env.PORT || 9000
app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`)
})

app.use('/user', usersRoute)
app.use('/menu', menuRoute)