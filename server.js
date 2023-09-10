const express = require("express");
const mongoose = require("mongoose");
const collection = require('../task-7/src/Signup/model/Signup.mongo');
const cors = require("cors")

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Data")
.then(() => {
    console.log("mongo Connected");
})
.catch(() => {
    console.log("Connection failed");
})

app.post("/login", async(req, res) => {
    const {email, password} = req.body;

    try {
        const checkEmail = await collection.findOne({email:email})
        const checkPwd = await collection.findOne({password:password})

        if(checkEmail && checkPwd){
            res.json("exist")
        }
        else {
            res.json("Enter Valid Input")
        }
    }
    catch(e){
        res.json("User Not Exist")
    }
})

app.post("/signup", async(req, res) => {
    const {firstName, lastName, email, password} = req.body;

    const data = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    }

    try {
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else {
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("Not Exist")
    }
})

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}...`);
})