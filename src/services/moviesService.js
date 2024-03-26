const Movies=require("../models/Movies");

const createMovies=async (moviesData)=>{
    try {
        const movies = await Movies.create(moviesData);

        return movies;
    } catch (error) {
        throw error
    }
}
const updateMovies= async (moviesId,userid,updateData)=>{
    try {
        const movies=await Movies.findOneAndUpdate(
            {_id:moviesId,userId:userid},
            {$set :updateData},
            {new:true}
        )
        return movies
    } catch (error) {
        throw error;
    }
}

const deleteMovies= async (moviesId,userid)=>{
    try {
        const movies= await Movies.findOneAndDelete(
            {_id:moviesId ,userId:userid}
        )
        return movies;
    } catch (error) {
        throw error
    }
}

 const getMovieById =async ( moviesId , userid)=>{
        try {
            const movies =await Movies.findOne({_id:moviesId ,userId:userid})
            return movies;
        } catch (error) {
            throw error
        }
 }
module.exports={createMovies,updateMovies,deleteMovies ,getMovieById}