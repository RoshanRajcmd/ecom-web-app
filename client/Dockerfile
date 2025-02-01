# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory
WORKDIR /ecom-client-app

# Copy the current directory contents into the container at /app
COPY client/ /ecom-client-app

# Install Angular
RUN npm install
RUN npm install -g @angular/cli

# Serve the app
CMD ["ng", "serve", "--host", "0.0.0.0"]