FROM node:12-stretch

USER node

WORKDIR /home/node/code

COPY --chown=node:node index.js index.js

#ADD --chown=node:node index.js index.js #does the same as copy but aloows work with compressed files and network

CMD ["node", "index.js"]