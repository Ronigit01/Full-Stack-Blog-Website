const express = require("express")

const router = express.Router()
const upload = require("../utils/profilePic-multer")
const uploadImage = require("../utils/blog-multer")
const isLoggedIn = require("../middlewares/isLoggedIn");

const {
    profileController,
    avatarPageController,
    uploadController,
    deleteController,
    editController,
    updateController,

} = require("../controllers/profile-controller");

router.get("/", isLoggedIn, profileController)
router.get("/avatar", isLoggedIn, avatarPageController)
router.post("/upload", upload.single("avatar"), isLoggedIn, uploadController)
router.get("/delete/:id", isLoggedIn, deleteController)
router.get("/edit/:id", isLoggedIn, editController)
router.post("/update/:id", uploadImage.single("image"), isLoggedIn, updateController)

module.exports = router;