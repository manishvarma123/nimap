import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongodb)
        console.log('Mongodb connected successfully')
    } catch (error) {
        console.log("MongoDB connection failed");
    }
}

export default connectDB