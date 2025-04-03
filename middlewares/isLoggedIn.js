
const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()

app.use(cookieParser())
const jwt = require("jsonwebtoken")
require("dotenv").config()

const isLoggedIn = (req,res,next) =>{

    if(!req.cookies.token){
        res.send("you must be logged in")
    }else {
        const data = jwt.verify(req.cookies.token, process.env.SECRET_KEY)
        req.user = data
        console.log(req.user)
        next();
    }
}

module.exports = isLoggedIn