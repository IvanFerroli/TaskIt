# Dockerfile para auth-service

FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "authIndex.js"] 
