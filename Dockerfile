FROM node:24.16.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build 

EXPOSE 3000

CMD ["node", "dist/main"]

