import mongoose from "mongoose";

const connectMongoDB = async () => {
  let connectName:string = process.env.MONGODB_URI!; 

  try {
    await mongoose.connect(connectName);
    console.log("Connected to MongoDB.")
  } catch (error) {
    console.log(error);
  }
};
export default connectMongoDB;