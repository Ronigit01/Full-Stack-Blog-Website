
const bcrypt = require("bcrypt");
const { userModel } = require("../model/user");
const generateToken = require("../utils/generateToken");

module.exports.loginController = (req,res) =>{
    res.render("login")
}

module.exports.loginCheckController = async (req,res) =>{
   const {email, password} = req.body;

   const user = await userModel.findOne({email:email})

    if(!user) return res.status(500).send("user does not exit!")

    bcrypt.compare(password, user.password, (err, result)=>{
        if(result) return res.redirect("/")
            res.redirect("/login")
    })

    const token = generateToken({email:email, id:user._id})
    res.cookie("token", token)

}