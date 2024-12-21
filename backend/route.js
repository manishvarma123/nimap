import express from 'express';
import getPopular from './controllers/getPopular.js';
import getmovieDetail from './controllers/getmovieDetail.js';
import getTopRated from './controllers/getTopRated.js';
import getUpcoming from './controllers/getUpcoming.js';
import getmovieSearch from './controllers/getmovieSearch.js';

const router = express.Router();

router.get('/popular',getPopular);
router.get('/:id/movie-detail',getmovieDetail);
router.get('/top-rated',getTopRated);
router.get('/upcoming-movies',getUpcoming);
router.get('/search',getmovieSearch)

export default router;