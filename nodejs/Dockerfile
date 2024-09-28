# Use official Node.js image
FROM node:20.11.0

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code to working directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the Node.js server
CMD ["node", "server.js"]
