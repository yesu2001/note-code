import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(process.env.NEXT_MONGO_URL);

export default connectMongo;
