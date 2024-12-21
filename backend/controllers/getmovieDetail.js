import { movieModel } from "../models/movieModel.js"


const getmovieDetail = async (req,res) => {
    try {
        const {id} = req.params;
        const movieDetail = await movieModel.findOne({_id : id});

        if(!movieDetail){
            throw new Error('failed to get the movie Details')
        }

        return res.status(200).json({
            message : 'Movie details get successfully',
            success : true,
            error : false,
            data : movieDetail
        })
    } catch (error) {
        return res.status(401).json({
            message : error.message || error,
            success : false,
            error : true
        })
    }
}

export default getmovieDetail