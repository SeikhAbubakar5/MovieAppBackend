const express =require("express")


const router=express.Router();
const authController =require("../controllers/authControllers")

//  /api/users/register
router.post("/register" , authController.register);

//  /api/users/login
router.post("/login" ,authController.login)
module.exports=router