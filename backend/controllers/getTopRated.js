import { movieModel } from "../models/movieModel.js"


const getTopRated = async (req,res) => {
    try {
        const movies = await movieModel.find().select('title primaryImage averageRating numVotes').sort({averageRating : -1}).limit(46);

        if(!movies){
            throw new Error('failed to retrieve top rated movies');
        }

        return res.status(200).json({
            message : 'top rated movies retrieve successfully',
            success : true,
            error : false,
            data : movies
        })
    } catch (error) {
        return res.status(401).json({
            message : error.message || error,
            success : false,
            error : true
        })
    }
}

export default getTopRated