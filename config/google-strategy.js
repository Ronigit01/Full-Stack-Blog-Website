
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20")
require("dotenv").config()


// Signin strategy

passport.use("google-signin",new GoogleStrategy({

    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_SIGNIN_CALLBACK_URL,

},
    function (accessToken, refreshToken, profile, done) {

        done(null, profile)
    }))

// Login strategy

passport.use("google-login",new GoogleStrategy({

    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_LOGIN_CALLBACK_URL,

}, function (ccessToken, refreshToken, profile, done) {

    done(null, profile)
}))


passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})