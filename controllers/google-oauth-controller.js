
const {userModel} = require("../model/user")
const generateToken = require("../utils/generateToken")

module.exports.googleSignInAuthController =async (req,res) =>{

    try{
        console.log(req.user)
        if(!req.user){
            return res.status(401).send("Authentication failed");
        }
    
        const user =await userModel.findOne({email:req.user.emails[0].value})
    
        if(user){
            res.send("user already exits! please login")

        }else{
          const newuser = await userModel.create({
                name: req.user.displayName,
                email: req.user.emails[0].value,
                password: null,
            })
            // console.log(newuser)
            const token = generateToken({email:newuser.email, id:newuser._id})
            res.cookie("token",token)
            res.redirect("/")
        }
    }catch(err){
        console.log(err)
        return res.status(401).send("Google Authentication failed");
    }

}


module.exports.googleLoginAuthController = async (req,res) =>{

    try{

        if(!req.user) {
            return res.status(401).send("Authentication failed");
        }
    
        const user = await userModel.findOne({email: req.user.emails[0].value})
    
        if(!user){
            res.send("user does not exits! please sign in")
        }else{
            const token = generateToken({email:user.email, id:user._id})
            res.cookie("token",token)
            res.redirect("/")
        }

    }catch(err){
        console.log(err)
        return res.status(401).send("Google Authentication failed");
    }

}