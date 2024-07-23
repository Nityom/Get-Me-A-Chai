import mongoose from 'mongoose';
// vHI8ygxURmRAvYGq
// nityomtikherr
const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://nityomtikherr:vHI8ygxURmRAvYGq@cluster0.h0exmbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  export default connectDB;