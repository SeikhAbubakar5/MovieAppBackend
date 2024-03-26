
const RatingsReviews=require("../models/RatingsReviews");

const createReviews= async(reviewsData)=>{
    try {
        const reviews= await RatingsReviews.create(reviewsData);

        return reviews;
    } catch (error) {
        throw error;
    }
}
const updateReview= async(movieId ,reviewId,text,rating)=>{
    try {
        const reviews=await RatingsReviews.findByIdAndUpdate(
            reviewId,{
                text,rating,
            },{ new:true});
            
            return reviews;
    } catch (error) {
        throw error
    }
}

const deleteReview=async (reviewId, movieId)=>{
    try {
        const reviews= await RatingsReviews.findByIdAndDelete(
            {_id:reviewId,movieId:movieId}
        )
        return reviews;
    } catch (error) {
        throw error
    }
}

const getAllReviews=async(movieId)=>{
    try {
        const review=await RatingsReviews.find({movieId})

        return review
    } catch (error) {
        throw error
    }
}

const averageRatings=async(movieId)=>{
    try {
        const review=await RatingsReviews.find({movieId})

        if (!review || review.length === 0) {
            return 0;
        }
        const totalRatings=review.reduce((acc, rev) => acc + rev.rating, 0);
        const averageRating = totalRatings / review.length;

        return averageRating
    } catch (error) {
        throw error
    }
}
module.exports={createReviews, updateReview ,deleteReview ,getAllReviews,averageRatings}