import mongoose from 'mongoose';
import { config } from './env';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = config.mongodbUri;

    if (!mongoURI) {
      console.warn('MONGODB_URI is not defined in .env. Skipping database connection in development mode.');
      return;
    }

    await mongoose.connect(mongoURI);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;