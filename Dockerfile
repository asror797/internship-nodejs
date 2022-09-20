FROM node:latest

WORKDIR /src

COPY . .

RUN npm install


CMD ["node","/src/index.js"]

EXPOSE 5050
