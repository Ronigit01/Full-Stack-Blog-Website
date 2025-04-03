
const postModel = require("../model/post")

module.exports.showBlogController =async (req,res) =>{
    const post = await postModel.findOne({_id:req.params.id})
    console.log(post)
    res.render("show",{post})
}