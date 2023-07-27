const express=require("express");
const router=express.Router();
const authController=require('../controllers/auth/authController');
const auth=require('../middleware/auth');
const joi=require("joi");
const validator=require("express-joi-validation").createValidator({});

const registerSchema=joi.object({
    username:joi.string().min(3).max(12).required(),
    password:joi.string().min(6).max(12).required(),
    mail:joi.string().email().required()
});

const loginSchema=joi.object({
    password:joi.string().min(6).max(12).required(),
    mail:joi.string().email().required()
});


router.post("/register",validator.body(registerSchema),authController.controllers.postRegister);

router.post("/login",validator.body(loginSchema),authController.controllers.postLogin);

router.get("/test",auth,(req,res)=>{
    res.send("Request Passed");
})

module.exports=router;