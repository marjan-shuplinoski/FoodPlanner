# Use official Node.js image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install only production dependencies for smaller image
COPY package*.json ./
RUN npm install --production --no-audit --no-fund

# Copy application sources
COPY . .

# Use a non-root user for better security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser:appgroup /app
USER appuser

ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
	CMD wget -qO- --tries=1 --timeout=5 http://127.0.0.1:5000/health || exit 1

CMD ["node", "src/server.js"]
