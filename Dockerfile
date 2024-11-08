# Stage 1: Build the Angular app
FROM node:20.9.0 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the Angular project files
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Serve the app using an Nginx server
FROM nginx:alpine

# Copy the built app from the previous stage to the Nginx public directory
COPY --from=build /app/dist/<angular-app-name> /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
