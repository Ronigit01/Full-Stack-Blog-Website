
const postModel = require("../model/post")
const { userModel } = require("../model/user")

module.exports.indexController =async (req,res) =>{
    
    const posts = await postModel.find()
    res.render("index", {token: req.cookies.token , posts})
}

