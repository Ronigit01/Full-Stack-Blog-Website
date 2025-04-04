const { userModel, validatedata } = require("../model/user");
const bcrypt = require("bcrypt")
const generateToken = require("../utils/generateToken")


module.exports.signinController = (req, res) => {
    res.render("signin")
}

module.exports.createController = async (req, res) => {
    const { name, email, password } = req.body;
    
    const error = validatedata({name,email,password})

    if (error) {
        console.log(error.message)
        return res.status(500).send("invalid credentials")

    } else {

        const user = await userModel.findOne({ email: email })
        if (user) {
            res.send("user already exits! please login")

        } else {

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, async (err, hash) => {
                    
                    try{
                        const newuser = await userModel.create({
                            name,
                            email,
                            password: hash,
                        })
    
                        const token = generateToken({email:email ,id:newuser._id})
                        res.cookie("token", token)
                        res.redirect("/login")

                    }catch(err){
 
                        if(err.name === "ValidationError"){          //database level validation check
                            return res.status(500).send("invalid credentials")
                        }
                    }
                })
            })


        }



    }

}