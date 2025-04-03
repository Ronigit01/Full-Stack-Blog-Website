const express = require("express")

const router = express.Router();

const {loginController} = require("../controllers/login-controller")
const {loginCheckController} = require("../controllers/login-controller")

router.get("/", loginController)
router.post("/check", loginCheckController)

module.exports = router;