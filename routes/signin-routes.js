const express = require("express")
const router = express.Router()

const { signinController, createController } = require("../controllers/signin-controller")



router.get("/" , signinController)
router.post("/create" , createController)

module.exports = router