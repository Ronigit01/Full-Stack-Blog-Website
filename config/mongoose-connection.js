const mongoose = require("mongoose")
require("dotenv").config()


const connectdb = () =>{
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log("connected to database")
        
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectdb