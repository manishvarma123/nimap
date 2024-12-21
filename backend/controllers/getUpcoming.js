import { movieModel } from "../models/movieModel.js"


const getUpcoming = async (req,res) => {
    try {
        const movies = await movieModel.find().sort({startYear : -1}).limit(48).select('title primaryImage averageRating startYear');

        if(!movies){
            throw new Error('failed to retrieve upcoming movies')
        }

        return res.status(200).json({
            message : 'upcoming movies retrieve successfully',
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

export default getUpcoming