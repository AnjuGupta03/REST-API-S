const express = require('express');
//const fs = require('fs')
//const mongoose = require('mongoose');

const {connectMonogoDb} = require('./connection')
const {logReqRes} = require("./middleware");

const userrouter = require('./routes/user');

//const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 3003;

//connection
connectMonogoDb('mongodb://127.0.0.1:27017/anju-app-1');

//connection of mongos
//mongoose
//.connect('mongodb://127.0.0.1:27017/anju-app-1')
//.then(() => console.log("MongoDB Connected"))
//.catch((err) => console.log("Mongo Error", err));



//middleware ---plugin
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes ("log.txt"));

//app.use((req, res, next) => {
  //fs.appendFile("log.txt",`/n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`, (err, data) => {
    //next();
  //}
  //);
//});


app.use("/user", userrouter);

app.listen(PORT, () => console.log(`server started at PORT:${PORT}`));