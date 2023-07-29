FROM node:16-alpine
RUN mkdir -p /test
WORKDIR /test
COPY . /test
RUN npm install
CMD [ "npm", "start" ]