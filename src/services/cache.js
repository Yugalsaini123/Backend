// src/services/cache.js
const redisClient = require('../config/redis');
const logger = require('../utils/logger');

exports.cacheResponse = async (key, data) => {
  try {
    await redisClient.set(key, JSON.stringify(data), 'EX', 3600);
  } catch (err) {
    logger.error('Error caching data:', err);
  }
};

exports.getCachedResponse = async (key) => {
  try {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    logger.error('Error fetching cached data:', err);
    return null;
  }
};