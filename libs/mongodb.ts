import mongoose from "mongoose";

const connectMongoDB = async () => {
  let name1:string = process.env.MONGODB_URI!; 

  try {
    await mongoose.connect(name1);
    console.log("Connected to MongoDB.")
  } catch (error) {
    console.log(error);
  }
};
export default connectMongoDB;