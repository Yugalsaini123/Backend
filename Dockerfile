# Dockerfile
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Load environment variables from .env file
ENV NODE_ENV=development
ENV MONGO_URI mongodb://mongodb:27017/faq_db
ENV REDIS_URL redis://redis:6379
ENV AWS_REGION ap-south-1
ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

# Start the application
CMD ["npm", "start"]
