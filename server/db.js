import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

const connectDB = async() => {
    try{
        const db= await mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected to", db.connection.name);
    }catch(error){
        console.log(error);
    }
}
export default connectDB;
