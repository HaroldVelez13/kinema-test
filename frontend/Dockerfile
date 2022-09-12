FROM node:14-alpine

WORKDIR /usr/app

COPY package.json /usr/app

RUN npm install -g next \
    npm install \
    npm install --only=dev --silent 

COPY . /usr/app

EXPOSE 3000
