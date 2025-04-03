const express = require("express")
const upload = require("../utils/blog-multer")
const isLoggedIn = require("../middlewares/isLoggedIn")

const router = express.Router()

const {createBlogController, submitBlogController} = require("../controllers/create-blog-controller")

router.get("/",isLoggedIn, createBlogController)
router.post("/submit-blog",upload.single("image"),isLoggedIn, submitBlogController)

module.exports = router;