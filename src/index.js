require("dotenv").config({path:"src/.env"})
const express=require ("express");
const mongoose= require("mongoose");
const authRoutes=require("./routes/authRoutes");
const movieRoutes=require("./routes/moviesRoutes");
const ratingsreviewsRoutes=require("./routes/ratingsreviewsRoutes")
const app =express();

//connect to Mongodb
app.use(express.json())
app.use("/api/users",authRoutes)
app.use("/api/movies",movieRoutes)
app.use("/api/movies",ratingsreviewsRoutes)


mongoose.connect(process.env.MONGODB_URI,{ 
}) .then(()=>{
    console.log("MongoDB conected")
}).catch((error)=>{
    console.log(error)
})

// app.get("/",(req,res)=>{
//     res.send("hellow")
// })
const PORT=process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})