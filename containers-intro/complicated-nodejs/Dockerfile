FROM node:12-stretch

USER node

WORKDIR /home/node/code

COPY package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["node", "index.js"]