// src/controllers/faqController.js
const FAQ = require("../models/faqModel");
const { translateText } = require("../services/translation");
const { cacheResponse, getCachedResponse } = require("../services/cache");

// Helper function for translations
const createTranslations = async (question, answer) => {
  const languages = ['hi', 'bn', 'es', 'fr', 'de', 'ja', 'ar', 'pt', 'ru', 'zh'];
  const translations = {};

  for (const lang of languages) {
    try {
      translations[`question_${lang}`] = await translateText(question, lang);
      translations[`answer_${lang}`] = await translateText(answer, lang);
    } catch (err) {
      translations[`question_${lang}`] = question;
      translations[`answer_${lang}`] = answer;
    }
  }

  return translations;
};

exports.getFAQs = async (req, res) => {
  const { lang } = req.query;
  const cacheKey = `faqs_${lang}`;

  try {
    const cachedData = await getCachedResponse(cacheKey);
    if (cachedData) return res.json(cachedData);

    const faqs = await FAQ.find({}).lean();
    const translatedFaqs = faqs.map(faq => ({
      ...faq,
      question: faq.translations?.[`question_${lang}`] || faq.question,
      answer: faq.translations?.[`answer_${lang}`] || faq.answer
    }));

    await cacheResponse(cacheKey, translatedFaqs);
    res.json(translatedFaqs);
  } catch (err) {
    console.error("Error fetching FAQs:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.createFAQ = async (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ message: 'Question and answer are required' });
  }

  try {
    const translations = await createTranslations(question.trim(), answer.trim());
    
    const newFAQ = new FAQ({ 
      question: question.trim(),
      answer: answer.trim(),
      translations
    });
    
    await newFAQ.save();
    res.status(201).json(newFAQ);
  } catch (err) {
    logger.error(`FAQ creation error: ${err.message}`);
    res.status(500).json({ 
      message: 'Server Error'
    });
  }
};