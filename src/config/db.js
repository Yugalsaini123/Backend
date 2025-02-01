// src/config/db.js
const mongoose = require('mongoose');
const logger = require('../utils/logger');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    logger.info('MongoDB Connected');
  } catch (err) {
    logger.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;