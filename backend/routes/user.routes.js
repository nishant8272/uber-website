const express=require("express")
const router=express.Router();

const userController=require("../controllers/user.controller")
const {body}=require("express-validator")
const {authUser}=require("../middlewares/auth.middleware")

router.post("/register",[body('email').isEmail().withMessage("invalid email."),
    body("fullname.firstname").isLength({min:3}).withMessage("firstname must have 3 character"),
    body("password").isLength({min:6}).withMessage("password must have 6 character"),
],
userController.registerUser
)

router.post("/login",[
    body("email").isEmail().withMessage("invalid email."),
    body("password").isLength({min:6}).withMessage("password must have 6 character"),
],
userController.loginUser)

router.get("/profile",authUser,userController.getUserProfile)
router.get("/logout",authUser,userController.logoutUser)
module.exports=router