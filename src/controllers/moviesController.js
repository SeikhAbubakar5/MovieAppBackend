const moviesService=require("../services/moviesService")

const addMovies= async (req,res)=>{
    try {
        const { title, director, genre, releaseYear, description}=req.body;

        const userId=req.user.id;

        const movies= await moviesService.createMovies({title, director, genre, releaseYear, description,userId});

        res.status(201).json({movies})
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const updateMovies= async (req,res)=>{
        try {
            const {id}=req.params;

            const userId=req.user.id;

            const updateMovies=req.body;
            const movies= await moviesService.updateMovies(id,userId,updateMovies);
            if(!movies){
                return res.status(404).json({message:"Movies not found"})
            }
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json({message:error.message})
        }
}

const deleteMovies =async (req,res)=>{
    try {
        const {id}=req.params;
        const userId=req.user.id;

        const success=await moviesService.deleteMovies(id,userId)

        if(!success){
            return res.status(404).json({message:"Movies not found"})
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getMovieById=async (req,res)=>{
    try {
        const {id}= req.params;
        const userId=req.user.id;

        const movies= await moviesService.getMovieById(id ,userId)
         if (!movies){
            return res.status(404).json({message:"Movies not found"});
         }
         res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports={addMovies, updateMovies, deleteMovies, getMovieById}