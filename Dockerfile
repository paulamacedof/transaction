FROM node:20.16.0-alpine

WORKDIR /app
COPY package*.json .
RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"]