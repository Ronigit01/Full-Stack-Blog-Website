const express = require("express")

const router = express.Router()
const passport = require("passport")
const {googleSignInAuthController, googleLoginAuthController} = require("../controllers/google-oauth-controller")


// for sign in 

router.get("/google", passport.authenticate("google-signin", {scope:["profile", "email"]}))

router.get("/google/callback", passport.authenticate("google-signin", {failureRedirect:"/signin"}),
googleSignInAuthController

)

// for login

 router.get("/google-login", passport.authenticate("google-login", {scope:["profile", "email"]}))

 router.get("/google-login/callback" , passport.authenticate("google-login",{failureRedirect:"/login"}),
 googleLoginAuthController
)


module.exports = router