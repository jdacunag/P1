# To build a Frontend image in production use:
# docker build -t cc-frontend .

# Build stage
FROM node:alpine as builder
WORKDIR /app

# Set ENVs
ENV VITE_BACKEND_HOST _
ENV VITE_SESSION_TIME _

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies based on the package-lock.json file
RUN npm ci

# Copy the entire project to the working directory
COPY . .

# Build the application
RUN npm run build


# Production stage
FROM node:alpine as production
WORKDIR /app

# Copy the generated 'dist' directory from the builder stage to the production stage
COPY --from=builder /app/dist .

# Install 'serve' globally to serve the static files
RUN npm install -g serve

# Expose port 80 to the outside world and serve the app
EXPOSE 80
CMD ["serve", "-s", ".", "-l", "80"]
