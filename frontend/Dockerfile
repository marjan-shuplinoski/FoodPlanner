# Multi-stage build for production static site
FROM node:18-alpine AS build
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps --silent

# Copy source and build
COPY . .
RUN npm run build

# Serve with nginx
FROM nginx:stable-alpine
# Put built files under /usr/share/nginx/html/DailyPlanner so URLs with /DailyPlanner/ map to files
RUN mkdir -p /usr/share/nginx/html/DailyPlanner
COPY --from=build /app/dist /usr/share/nginx/html/DailyPlanner
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

