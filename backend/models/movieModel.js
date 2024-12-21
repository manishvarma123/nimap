import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    id : {type : String},
    url : {type: String},
    title : {type: String},
    primaryImage : {type: String},
    description : {type : String},
    startYear : {type : String},
    endYear : {type : Number},
    runtimeMinutes : {type : Number},
    contentRating : {type : String},
    averageRating : {type : Number},
    numVotes : {type : Number},
    type : {type : String}
});

export const movieModel = mongoose.model('movie',movieSchema);