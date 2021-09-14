FROM node:12-stretch

RUN npm i -g nodemon

USER node

WORKDIR /home/node/code

COPY package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["nodemon", "index.js"]