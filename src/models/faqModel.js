// src/models/faqModel.js
const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: {
    type: {
      question_hi: String,
      question_bn: String,
      answer_hi: String,
      answer_bn: String,
    },
    default: () => ({}),
  },
});

// Add model export
module.exports = mongoose.model('FAQ', faqSchema);