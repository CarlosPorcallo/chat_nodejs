# specify the node base image with your desired version node:<version>
FROM node:16-alpine

EXPOSE ${PORT_SOCKET} ${PORT_SERVER}

COPY ./ /app
WORKDIR /app

RUN npm install

CMD [npm run start]