import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './route.js';
dotenv.config();

const app = express();

app.use(cors());
app.use('/api/v1/movies',router)

const PORT = process.env.PORT || 8000;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is listening on port - ${PORT}`);
    })
})

