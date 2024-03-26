
const authService =require("../services/authService")

const register= async(req,res)=>{
    try {
        const usersData=req.body;

        const user=await  authService.registerUser(usersData)

        res.status(201).json({
            message:"User registered successfull",
             userId:user,
        })
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const login =async (req ,res)=>{
    try {
        const usersData=req.body;

        const {token ,userId}=await authService.loginUser(usersData);

        res.status(200).json({message:"user logged successfully",
        userId,
        token
    })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports={register,login}