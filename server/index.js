const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/userName.js')




const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/userName")

app.post('/login', (req, res) => {
    const {email,password} = req.body;
    userModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("the password is inccorect")
            }
        }else[
            res.json("No record Existed")
        ]
    })
})

app.post('/register', (req, res) => {
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
});

app.listen(3001,()=>{
    
    console.log("server running on port 3001")
}) 