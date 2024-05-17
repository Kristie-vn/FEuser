FROM node:16-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli@12.1.1

RUN npm install --version 8.11.0

CMD ["ng", "serve", "--host", "0.0.0.0"]