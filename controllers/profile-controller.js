const { userModel } = require("../model/user")
const postModel = require("../model/post")

module.exports.profileController = async (req,res) => {
    const user = await userModel.findOne({email:req.user.data.email}).populate("post")
    // console.log(user)
    res.render("profile", {user})
}

module.exports.avatarPageController = async (req,res) => {
    res.render("upload")
}

module.exports.uploadController = async (req,res) => {
    const user = await userModel.findOne({email:req.user.data.email})
    user.profilepic = req.file.filename
    await user.save()
    res.redirect("/profile")
}

module.exports.deleteController = async (req,res) => {
   const post = await postModel.findOneAndDelete({_id:req.params.id})
   res.redirect("/profile")
}

module.exports.editController = async (req,res) => {
   const post = await postModel.findOne({_id:req.params.id})
   console.log(post)
   res.render("edit", {post})
}

module.exports.updateController= async (req,res) => {
   const {title,content} = req.body
   const post = await postModel.findOne({_id:req.params.id})
   post.title = title;
   post.content= content
   if(req.file){
    post.blogpic = req.file.filename
   }

   await post.save()
   res.redirect("/profile")
 
}
