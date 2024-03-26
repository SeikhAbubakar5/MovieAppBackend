const ratingsreviewService= require("../services/ratingsreviewService");

const addReviewRatings= async (req,res)=>{
    try {
        const { id } = req.params;
        const userId=req.user.id
        const { rating, text } = req.body;

        const reviewRatings=await ratingsreviewService.createReviews({movieId:id,userId,rating,text})
            
        res.status(201).json({reviewRatings});
            
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const updateReview=async (req,res)=>{
    try {
        const {reviewId}=req.params;
        const movieId=req.user.id;
        const {text,rating}=req.body;

        const reviewRatings=await ratingsreviewService.updateReview(movieId ,reviewId,text,rating)

        if(!reviewRatings){
            return res.status(404).json({message:"reviews not found"})
        }
        res.status(200).json({reviewRatings});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


const deleteReview=async (req,res)=>{
    try {
        const {reviewId}=req.params;
        const movieId=req.user.id;

        const reviewRatings=await ratingsreviewService.deleteReview(reviewId,movieId)

        if(!reviewRatings){
            return res.status(404).json({message:"reviews not found"})
        }
        res.status(204).send()
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getAllReviews=async(req,res)=>{
    try {
        const {id}=req.params;

        const reviewRatings=await ratingsreviewService.getAllReviews(id)
        if(!reviewRatings){
            return res.status(404).json({message:"reviews not found"})
        }
        res.status(200).json(reviewRatings)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const averageRatings=async (req,res)=>{
       try {
        const {id}=req.params;

        const reviewRatings=await ratingsreviewService.averageRatings(id);

        res.status(200).json(reviewRatings);
       } catch (error) {
            res.status(500).json({message:error.message})
       }

}
module.exports={addReviewRatings,updateReview ,deleteReview, getAllReviews,averageRatings}