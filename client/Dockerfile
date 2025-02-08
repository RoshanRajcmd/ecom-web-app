# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory
WORKDIR /ecom-client-app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY client/ /ecom-client-app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Serve the app
CMD ["ng", "serve", "--host", "0.0.0.0"]