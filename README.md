FAQ Management System Backend
A robust and scalable Node.js backend service designed to manage multilingual FAQs. This system leverages MongoDB for storage, Redis for caching, and AWS Translate for seamless translations. Built with performance, security, and ease of use in mind, it supports CRUD operations, multi-language FAQs, and advanced caching mechanisms.

Features
CRUD Operations: Full support for creating, reading, updating, and deleting FAQs.

Multi-Language Support: Automatically translates FAQs into multiple languages using AWS Translate.

Redis Caching: Improves performance by caching FAQ responses with a 1-hour expiration.

Rate Limiting: Protects the API from abuse with a limit of 100 requests per 15 minutes.

Comprehensive Error Handling: Logs errors using Winston for both development and production environments.

Docker Support: Easy deployment with Docker and Docker Compose.

Security Features:

CORS protection.

Helmet.js for secure HTTP headers.

Environment-based CORS origin configuration.

Prerequisites
Local Setup
Node.js (v16 or higher)

MongoDB (for database storage)

Redis (for caching)

AWS Account with Translate API access

Docker Setup
Docker

Docker Compose

Environment Variables
Create a .env file in the root directory with the following variables:

env
Copy
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/faq_db
REDIS_URL=redis://localhost:6379
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
FRONTEND_URL=http://localhost:3000
Installation
Local Setup
Clone the repository:

bash
Copy
git clone [(https://github.com/Yugalsaini123/Backend.git)]
cd faq-backend
Install dependencies:

bash
Copy
npm install
Start MongoDB and Redis locally.

Start the server:

bash
Copy
npm start
Docker Setup
Clone the repository:

bash
Copy
git clone [(https://github.com/Yugalsaini123/Backend.git)]
cd faq-backend
Build and run with Docker Compose:

bash
Copy
docker-compose up --build
The application will be available at http://localhost:5000.

API Endpoints
FAQ Endpoints
GET /api/faqs?lang=<language_code>: Fetch all FAQs (optionally in a specific language).

POST /api/faqs: Create a new FAQ.

Health Check
GET /health: Check the service health.

Testing
Run the test suite:

bash
Copy
npm test
Cache Management
The system uses Redis for caching FAQ responses. Cache entries expire after 1 hour.

Error Handling
Errors are logged using Winston:

Console output for development.

File logging in logs/error.log and logs/combined.log.

Security Features
CORS Protection: Restricts cross-origin requests.

Rate Limiting: Limits requests to 100 per 15 minutes.

Helmet.js: Secures HTTP headers.

Environment-Based CORS: Configures allowed origins based on the environment.

Supported Languages
Hindi (hi)

Bengali (bn)

Spanish (es)

French (fr)

German (de)

Japanese (ja)

Arabic (ar)

Portuguese (pt)

Russian (ru)

Chinese (zh)

Development
ESLint Configuration
The project uses ESLint for code quality. Configuration can be found in eslint.config.js.

Production Deployment
Update environment variables for production:

Set NODE_ENV=production.

Use production-ready MongoDB and Redis configurations.

Configure proper AWS credentials.

Update CORS settings for the production frontend URL.

Deploy using Docker:

bash
Copy
docker-compose up --build
Contributing
Fork the repository.

Create a feature branch:

bash
Copy
git checkout -b feature/your-feature-name
Commit your changes:

bash
Copy
git commit -m "Add your feature"
Push to the branch:

bash
Copy
git push origin feature/your-feature-name
Create a Pull Request.