// src/models/faqModel.js
const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: {
    type: {
      // Existing
      question_hi: String,
      question_bn: String,
      answer_hi: String,
      answer_bn: String,
      // New languages
      question_es: String,
      question_fr: String,
      question_de: String,
      question_ja: String,
      question_ar: String,
      question_pt: String,
      question_ru: String,
      question_zh: String,
      answer_es: String,
      answer_fr: String,
      answer_de: String,
      answer_ja: String,
      answer_ar: String,
      answer_pt: String,
      answer_ru: String,
      answer_zh: String,
    },
    default: () => ({}),
  },
});

// Add model export
module.exports = mongoose.model('FAQ', faqSchema);