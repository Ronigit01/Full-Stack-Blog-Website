const express = require("express")
const app = express()
const path = require("path")
const indexRouter = require("./routes/index-routes")
const loginRouter = require("./routes/login-routes")
const signiinRouter = require("./routes/signin-routes")
const createBlogRouter = require('./routes/create-blog-routes')
const showBlogRouter = require("./routes/show-blog-routes")
const profileRouter = require("./routes/profile-routes")
const googleRouter = require("./routes/google-oauth-routes")
const GoogleStrategy = require("./config/google-strategy")
const expressSession = require("express-session")
const passport = require("passport")

require("dotenv").config()
const db = require("./config/mongoose-connection")
const cookieParser = require("cookie-parser")
db()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())
app.set("view engine" , "ejs")
app.use(expressSession({
    secret: process.env.EXPRESS_SESSION_KEY,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())

app.use("/", indexRouter)
app.use("/login", loginRouter)
app.use("/signin", signiinRouter)
app.use("/create-blog", createBlogRouter)
app.use("/blog",showBlogRouter)
app.use("/profile", profileRouter)
app.use("/auth", googleRouter)



app.post("/logout",(req,res)=>{
    res.clearCookie("token")
    res.redirect("/")
})


app.listen(process.env.PORT)


module.exports = app;
