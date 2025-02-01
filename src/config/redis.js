// src/config/redis.js
const Redis = require('ioredis');
const logger = require('../utils/logger');

const client = new Redis(process.env.REDIS_URL, {
  retryStrategy: (times) => Math.min(times * 50, 2000),
  maxRetriesPerRequest: 3
});

client.on('connect', () => logger.info('Connected to Redis'));
client.on('error', (err) => logger.error('Redis error:', err));

module.exports = client;