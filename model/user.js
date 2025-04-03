const mongoose = require("mongoose")
const joi = require("joi")


const userschema = mongoose.Schema({
    name: {
        type: String,
        minLength:3,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password: {
        type: String,
        minLength: 3,
        require: true,
    },
    profilepic: {
        type: String,
        default: "default.png",
    },
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        }
    ]
})


function validatedata(data) {
    const Schema = joi.object({
        name: joi.string().min(3).required(),
        email: joi.string().email().required(),
        password: joi.string().min(3).required(),
    })

    const {error} = Schema.validate(data);
    return error;
}



const userModel = mongoose.model("user", userschema)

module.exports = {validatedata, userModel}