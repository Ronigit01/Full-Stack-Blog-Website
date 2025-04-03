const mongoose = require("mongoose")

const postschema = mongoose.Schema({
    title: String,
    content: String,
    date: {
        type: String,
        default: () =>{
            return new Date().toISOString().split("T")[0]
        }
    },
    blogpic : {
        type: String,
        default: "blog.png",
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:  "user"
    }
})


module.exports = mongoose.model("post" , postschema)