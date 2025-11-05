import mongoose from "mongoose";
import 'dotenv/config'

const connectDb = async ()=>{
   await mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("connected DB success"))
    .catch(err =>console.error("DB connection error", err))

}

export default connectDb;