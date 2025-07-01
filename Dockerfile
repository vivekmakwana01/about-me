# Use official Node image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package.json and lock (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Run Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
