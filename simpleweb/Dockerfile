# Use official Node.js base image
FROM node:22.15.0

ENV CI=true
# Set working directory
WORKDIR /usr/simpleweb

# Copy only package files first (for layer caching)
COPY package.json ./

# Install dependencies
RUN npm install

# Now copy the rest of the code
COPY . .

# Default command
CMD ["npm", "start"]
