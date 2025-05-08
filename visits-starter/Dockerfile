# Use official Node.js base image
FROM node:22.15.0-alpine3.20

# Set working directory
WORKDIR /usr/app

# Copy only package files first (for layer caching)
COPY package.json ./

# Install dependencies
RUN npm install

# Now copy the rest of the code
COPY . .

# Default command
CMD ["npm", "start"]
