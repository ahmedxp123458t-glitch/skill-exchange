const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/skill-exchange';
    const conn = await mongoose.connect(mongoURI, { serverSelectionTimeoutMS: 3000 });
    isConnected = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.error(`MongoDB connection error: ${error.message}`);
  }
};

module.exports = { connectDB, isConnected };
