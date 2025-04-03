
const upload = require("../utils/blog-multer")
const postModel = require("../model/post")
const isLoggedIn = require("../middlewares/isLoggedIn")
const { userModel } = require("../model/user")

module.exports.createBlogController = (req,res) =>{
    res.render("createBlog")
}


module.exports.submitBlogController = async (req,res) =>{

    // console.log(req.user)
   const {title , content} = req.body;
   
    const user = await userModel.findOne({email:req.user.data.email})
    // console.log(user)
    const post = await postModel.create({
    title,
    content,
    blogpic: req.file.filename,
    user: req.user.data.id,
   })

   user.post.push(post._id)
   await user.save()
   res.redirect("/")

  
}