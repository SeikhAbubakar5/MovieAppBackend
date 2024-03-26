const mongoose= require("mongoose");

const ratingsReviewSchema= new mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required: true,
        min:1,
        max:5,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
        },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movies',
        required: true
        },

},{timestamps:true})

const RatingsReviews=mongoose.model("RatingsReviews",ratingsReviewSchema);

module.exports=RatingsReviews;