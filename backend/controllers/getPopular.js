import { movieModel } from "../models/movieModel.js"


const getPopular = async (req,res) => {
    try {
        const movies = await movieModel.find().select("title primaryImage averageRating numVotes").sort({numVotes : -1}).limit(56);

        if(!movies){
            throw new Error('failed to retrieve the popular movies');
        }

        return res.status(200).json({
            message : 'Popular movie data fetch successfully',
            success : true,
            error : false,
            data : movies
        })
    } catch (error) {
        return res.status(401).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

export default getPopular;