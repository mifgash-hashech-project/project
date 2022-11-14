FROM node:14.19.0

ARG SERVICE


COPY $SERVICE/package.json ./

RUN npm install

COPY $SERVICE/. ./

CMD npm run start