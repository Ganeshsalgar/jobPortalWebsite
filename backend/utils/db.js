import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb Connected SuccessFully")
    }
    catch (error) {
        console.log("MongoDb connection failed ",error);
        
    }
}


export default connectDB