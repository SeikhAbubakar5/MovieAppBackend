const jwt =require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User=require("../models/Users")

const registerUser= async (usersData)=>{
    try {
        const existingUsers= await User.findOne({email:usersData.email})
        if(existingUsers){
            throw new Error("User Already Exists")
        }
        const user= new User(usersData)
        const salt =await bcrypt.genSalt(5);
        const hashedPassword= await bcrypt.hash(usersData.password,salt)

        user.password=hashedPassword;


        await user.save();
        return user;
    } catch (error) {
        throw error
    }
}

const loginUser= async (usersData)=>{
    try {
        const { email ,password}=usersData;

        const user =await User.findOne({email})
        if(!user){
            throw new Error ("User not found")
        }
        // console.log(users)
        //match password
        const isMatch=await user.comparePassword(password)
        if(!isMatch){
            throw new Error("Invalid credetials")
        }
const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        return {token ,user}
    } catch (error) {
        throw error;
    }
}
module.exports={registerUser, loginUser}