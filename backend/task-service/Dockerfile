# Dockerfile para task-service

FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "taskIndex.js"]  # Nome do arquivo de entrada ajustado
