// src/utils/helpers.js
const logger = require('./logger');

exports.handleError = (res, error, message = 'Server Error') => {
    logger.error(error);
    res.status(500).json({ message });
  };
  
  exports.successResponse = (res, data, message = 'Success') => {
    res.status(200).json({ message, data });
  };
  