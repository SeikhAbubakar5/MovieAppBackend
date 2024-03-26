const express =require("express")

const router=express.Router();

const moviesController= require("../controllers/moviesController");
const authenticateToken=require("../middleware/authMiddleware");


//  post -/api/movies  add a movies
router.post("/",authenticateToken,moviesController.addMovies);


// put -/api/movies/:id Update Movie
router.put("/:id",authenticateToken ,moviesController.updateMovies);

// DELETE /api/movies/:id Delete movie
router.delete("/:id",authenticateToken,moviesController.deleteMovies);

// GET /api/movies/:id Get specific movies
router.get("/:id", authenticateToken,moviesController.getMovieById);


module.exports=router;