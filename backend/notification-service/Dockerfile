# Dockerfile para notification-service

FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "notificationIndex.js"]
