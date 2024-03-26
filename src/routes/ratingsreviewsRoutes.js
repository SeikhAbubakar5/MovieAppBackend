const express =require("express");
const authenticationToken = require("../middleware/authMiddleware");
const ratingsreviewsControlles=require("../controllers/ratingsreviewControllers")
const router=express.Router();

// Rate and Review Movie
router.post('/:id/reviews',authenticationToken,ratingsreviewsControlles.addReviewRatings);

//update a review   
router.put("/:movieId/reviews/:reviewId",authenticationToken,ratingsreviewsControlles.updateReview)

//delete a review
router.delete("/:movieId/reviews/:reviewId",authenticationToken,ratingsreviewsControlles.deleteReview)

//get All review for 
router.get("/:id/reviews",authenticationToken,ratingsreviewsControlles.getAllReviews)

//average ratings
router.get("/:id/averageRating",authenticationToken,ratingsreviewsControlles.averageRatings)

module.exports=router;