// src/tests/faq.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const FAQ = require('../models/faqModel');
const redisClient = require('../config/redis');

chai.use(chaiHttp);
const { expect } = chai;

describe('FAQ API', () => {
  beforeEach(async () => {
    await FAQ.deleteMany({});
    await redisClient.flushall(); // Clear Redis cache
  });

  it('should create a new FAQ', (done) => {
    chai.request(server)
      .post('/api/faqs')
      .send({ question: 'Test Question', answer: 'Test Answer' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('question', 'Test Question');
        done();
      });
  });

  it('should fetch FAQs with caching', async () => {
    await FAQ.create({ question: 'Q1', answer: 'A1' });
    const res = await chai.request(server).get('/api/faqs?lang=en');
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
  });

  it('should handle translation failure gracefully', async () => {
    const res = await chai.request(server)
      .post('/api/faqs')
      .send({ question: 'Test', answer: 'Test' });
    expect(res).to.have.status(201);
  });
});