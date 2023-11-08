import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "ecomm",
    });
    console.log(`Conneted to Database`);
  } catch (error) {
    console.log(`Errro in database ${error}`);
  }
};

export default connectDB;
