FROM node:7.10-alpine

WORKDIR /src

COPY package.json .
RUN npm install

COPY . .