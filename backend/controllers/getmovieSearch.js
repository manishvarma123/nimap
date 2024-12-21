import { movieModel } from "../models/movieModel.js"

const getmovieSearch = async (req,res) => {
    try {
        
        const {query} = req.query;

        if (!query) {
            return res.status(400).json({
                message: "Search query is required",
                success: false,
                error: true,
            });
        }

        const movies = await movieModel.find({title : {$regex : query, $options:"i"}});

        if(movies.length === 0){
            return res.status(201).json({
                message : 'No movie found',
                success : false,
                error : true,
                data : []
            })
        }

        return res.status(200).json({
            message: "Movies fetched successfully",
            success: true,
            error: false,
            data: movies,
        });

    } catch (error) {
        return res.status(401).json({
            message : error.message || error,
            success : false,
            error : true
        })
    }
}

export default getmovieSearch