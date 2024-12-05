FROM node:20.10.0-alpine


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install -g typescript



COPY ./src /usr/src/app/src

COPY tsconfig.json /usr/src/app

RUN tsc


CMD [ "node", "--watch"  ,"./dist/server.js" ]