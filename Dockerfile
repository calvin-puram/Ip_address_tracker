FROM node:alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm ci --silent
COPY . .
RUN npm run build


EXPOSE 3000
CMD [ "npm", "start" ]