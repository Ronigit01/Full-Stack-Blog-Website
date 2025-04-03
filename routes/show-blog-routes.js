const express = require("express")

const router = express.Router()

const {showBlogController} = require("../controllers/show-blog-controller")

router.get("/:id", showBlogController)

module.exports = router