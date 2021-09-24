FROM node:12-stretch as build

USER node

WORKDIR /build

COPY package-lock.json package.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:1.17

COPY --from=build /build/build /usr/share/nginx/html

