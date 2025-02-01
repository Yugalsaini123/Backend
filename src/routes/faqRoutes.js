// src/routes/faqRoutes.js
const express = require('express');
const faqController = require('../controllers/faqController');

const router = express.Router();

router.get('/', faqController.getFAQs);
router.post('/', faqController.createFAQ);

module.exports = router;