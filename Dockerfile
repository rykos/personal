FROM node:14.18.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm i http-server

COPY . ./

RUN npm run build

EXPOSE 443
CMD ["http-server", "/app/build", "-S", "-p", "443", "-C", "/var/imported/ssl/cert.pem", "-K", "/var/imported/ssl/privkey.pem"]