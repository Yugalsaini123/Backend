FAQ Management System Backend
A Node.js backend service for managing multilingual FAQs with MongoDB for storage, Redis for caching, and AWS Translate for translations.
Features

CRUD operations for FAQ management
Multi-language support with automatic translation
Redis caching for improved performance
Rate limiting and security features
Comprehensive error handling and logging
Docker support for easy deployment

Prerequisites
Local Setup

Node.js (v16 or higher)
MongoDB
Redis
AWS Account with Translate API access

Docker Setup

Docker
Docker Compose

Environment Variables
Create a .env file in the root directory with the following variables:
envCopyNODE_ENV=development
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
bashCopygit clone <repository-url>
cd faq-backend

Install dependencies:
bashCopynpm install

Start MongoDB and Redis locally
Start the server:
bashCopynpm start


Docker Setup

Clone the repository:
bashCopygit clone <repository-url>
cd faq-backend

Build and run with Docker Compose:
bashCopydocker-compose up --build


The application will be available at http://localhost:5000
API Endpoints
FAQ Endpoints

GET /api/faqs?lang=<language_code> - Get all FAQs (optionally in specific language)
POST /api/faqs - Create new FAQ

Health Check

GET /health - Check service health

Testing
Run the test suite:
bashCopynpm test
Cache Management
The system uses Redis for caching FAQ responses. Cache expires after 1 hour.
Error Handling
Errors are logged using Winston logger:

Console output for development
File logging in logs/error.log and logs/combined.log

Security Features

CORS protection
Rate limiting (100 requests per 15 minutes)
Helmet.js for HTTP headers security
Environment-based CORS origin configuration

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

Update environment variables for production
Use appropriate AWS credentials
Configure proper MongoDB and Redis security
Update CORS settings for production frontend URL

Contributing

Fork the repository
Create a feature branch
Commit changes
Push to the branch
Create a Pull Request