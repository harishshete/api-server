# Use buildx target platform (set with --platform, e.g. linux/amd64)
ARG TARGETPLATFORM=linux/amd64
FROM --platform=$TARGETPLATFORM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install production dependencies.
# Use npm ci when lockfile exists; otherwise fall back to npm install.
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

# Copy the rest of the application code
COPY . .

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

ENV CRED_FILE_PATH="/etc/hawk-api-server/secret.txt"
# Change ownership of the app directory to the nodejs user
USER nodejs

# Expose the port the app runs on
#EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]