// src/services/translation.js
const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");
const logger = require('../utils/logger');
const dotenv = require('dotenv');
dotenv.config();


// Verify AWS credentials before initializing client
if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
  logger.error('AWS credentials missing in environment variables');
  process.exit(1);
}

const translate = new TranslateClient({
  region: process.env.AWS_REGION || 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Add validation for supported languages
const supportedLanguages = ['hi', 'bn', 'es', 'fr', 'de', 'ja', 'ar', 'pt', 'ru', 'zh'];

exports.translateText = async (text, targetLang) => {
  if (!supportedLanguages.includes(targetLang)) {
    throw new Error(`Language ${targetLang} not supported`);
  }

  try {
    const params = {
      Text: text,
      SourceLanguageCode: "auto",
      TargetLanguageCode: targetLang,
    };

    const command = new TranslateTextCommand(params);
    const response = await translate.send(command);
    return response.TranslatedText;
  } catch (err) {
    logger.error(`Translation failed (${targetLang}): ${err.message}`);
    throw new Error('Translation service unavailable');
  }
};